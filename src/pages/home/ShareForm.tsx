import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import ShareInput from "./ShareInput";
import { db } from "common/modules/firebase";
import ShareFormUrl from "./ShareFormUrl";

const Layout = styled.div`
  padding: 1em;
`;

const Form = styled.form`
  max-width: 560px;
`;

const AuthorFields = styled.div``;

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
    db.collection("shares").add({
      company,
      team,
      ...json,
    });
  });

  const authorFields = [
    {
      name: "company",
      label: "회사",
      placeholder: "Naver LABS",
    },
    {
      name: "team",
      label: "팀",
      placeholder: "Platform Engineering",
    },
  ];

  return (
    <Layout>
      <Form onSubmit={onSubmit}>
        <AuthorFields>
          {authorFields.map((field) => (
            <ShareInput key={field.name} ref={register} {...field} />
          ))}
        </AuthorFields>
        <ShareFormUrl ref={register} />
        <button type="submit">생성</button>
      </Form>
    </Layout>
  );
};

export default ShareForm;
