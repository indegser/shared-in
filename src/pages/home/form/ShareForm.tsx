import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import ShareInput from "../ShareInput";
import { db, auth } from "common/modules/firebase";
import ShareFormUrl from "../ShareFormUrl";

const Layout = styled.div`
  padding: 1em;
`;

const Form = styled.form``;

const AuthorFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  margin-bottom: 20px;
`;

const ButtonLayout = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  font-size: 14px;
  color: white;
  border: none;
  box-sizing: border-box;
  background: #2b2929;
  padding: 8px 12px;
  border-radius: 4px;
`;

type FormData = {
  url: string;
  company: string;
  team: string;
};

const ShareForm = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(async ({ company, team, url }) => {
    const response = await fetch("/api/og", {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        "content-type": "application/json",
      },
    });
    const json = await response.json();
    const uid = auth().currentUser?.uid;

    db.collection("shares").add({
      company,
      team,
      uid,
      ...json,
    });
  });

  const authorFields = [
    {
      name: "company",
      label: "Company",
      placeholder: "Naver LABS",
    },
    {
      name: "team",
      label: "Team",
      placeholder: "Platform Engineering",
    },
  ];

  return (
    <Layout data-testid="share-form">
      <Form onSubmit={onSubmit}>
        <AuthorFields>
          {authorFields.map((field) => (
            <ShareInput key={field.name} ref={register} {...field} />
          ))}
        </AuthorFields>
        <ShareFormUrl ref={register} />
        <ButtonLayout>
          <SubmitButton type="submit">Share</SubmitButton>
        </ButtonLayout>
      </Form>
    </Layout>
  );
};

export default ShareForm;
