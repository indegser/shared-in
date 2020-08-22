import styled from "@emotion/styled";
import { Button, Input, Form, message } from "antd";
import { authStoreApi, useAuthStore } from "common/store";
import api from "common/api";

const Layout = styled.div`
  padding: 1em;
`;

const AuthorFields = styled.div``;

const ButtonLayout = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const ShareForm = () => {
  const { team, company } = useAuthStore((s) => s.user);
  const [form] = Form.useForm();

  const onSubmit = async (values) => {
    const { url, company, team } = values;
    const { uid } = authStoreApi.getState().user;
    const openGraph = await api.fetchOpenGraph(url);
    await api.updateUserBio({ company, team });
    await api.createShare({
      company,
      team,
      uid,
      createdAt: Date.now(),
      ...openGraph,
    });

    message.success("Shared an url ", 1.5);
    form.resetFields(["url", "comment"]);
  };

  const authorFields = [
    {
      name: "company",
      label: "Company",
      placeholder: "Company",
    },
    {
      name: "team",
      label: "Team",
      placeholder: "Team",
    },
  ];

  return (
    <Layout>
      <Form
        name="share-form"
        form={form}
        labelCol={{ span: 4 }}
        data-testid="share-form"
        onFinish={onSubmit}
        initialValues={{
          team,
          company,
        }}
      >
        <AuthorFields>
          {authorFields.map(({ name, label, placeholder }) => (
            <Form.Item required key={name} name={name} label={label}>
              <Input data-testid={name} placeholder={placeholder} />
            </Form.Item>
          ))}
        </AuthorFields>
        <Form.Item label="URL" required name="url">
          <Input />
        </Form.Item>
        <Form.Item label="Comment" name="comment">
          <Input.TextArea rows={4} />
        </Form.Item>
        <ButtonLayout>
          <Button
            size="middle"
            type="primary"
            data-testid="share-form-submit"
            htmlType="submit"
          >
            Share
          </Button>
        </ButtonLayout>
      </Form>
    </Layout>
  );
};

export default ShareForm;
