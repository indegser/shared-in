import styled from "@emotion/styled";
import ShareForm from "./ShareForm";
import { useAuthStore, AuthState } from "common/store";
import Spinner from "ui/Spinner";

const Layout = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 2em 0;
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
        <Spinner message="Checking Authentication" />
      )}
    </Layout>
  );
};

export default NewBookmark;
