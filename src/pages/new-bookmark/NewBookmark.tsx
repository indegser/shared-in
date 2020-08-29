import styled from "@emotion/styled";
import ShareForm from "./ShareForm";
import { useAuthStore, AuthState } from "common/store";
import Spinner from "ui/Spinner";

const Layout = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 2em 0;
`;

const MessageTitle = styled.h4`
  margin: 0;
`;

const Message = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 0 1em;
  margin: 0 auto;
  justify-content: center;
`;

const NewBookmark = () => {
  const authenticated = useAuthStore(
    (s) => s.status === AuthState.Authenticated
  );

  return (
    <Layout>
      {authenticated ? (
        <ShareForm />
      ) : (
        <Message>
          <Spinner />
          <MessageTitle>Checking Authentication</MessageTitle>
        </Message>
      )}
    </Layout>
  );
};

export default NewBookmark;
