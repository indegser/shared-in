import styled from "@emotion/styled";
import SignIn from "./SignIn";
import { useAuthStore, AuthState } from "common/store";
import UserMenu from "./UserMenu";

const Layout = styled.nav`
  padding: 1.2em 1em;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
`;

const Header = () => {
  const authStatus = useAuthStore((s) => s.status);
  const authMenu =
    authStatus === AuthState.Authenticated ? <UserMenu /> : <SignIn />;

  return (
    <Layout>
      <Content>
        <img src="/logo.svg" />
        {authMenu}
      </Content>
    </Layout>
  );
};

export default Header;
