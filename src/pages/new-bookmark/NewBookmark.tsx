import styled from "@emotion/styled";
import ShareForm from "./ShareForm";
import { useAuthStore, AuthState } from "common/store";
import Spinner from "ui/Spinner";

const Layout = styled.div`
  padding: 1em 0;
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
