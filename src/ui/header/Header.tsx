import styled from "@emotion/styled";
import Link from "next/link";
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

const Logo = styled.a`
  display: block;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -6px;
`;

const Header = () => {
  const authStatus = useAuthStore((s) => s.status);
  const authMenu =
    authStatus === AuthState.Authenticated ? <UserMenu /> : <SignIn />;

  const logo = (
    <svg
      width={17}
      viewBox="0 0 15 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 24.947V8.341h15v16.605l-7.5-7.812L0 24.946z" fill="#D2CBCB" />
      <path d="M0 16.604V0h15v16.604L7.5 8.793 0 16.604z" fill="#000" />
    </svg>
  );

  return (
    <Layout>
      <Content>
        <Link href="/" passHref>
          <Logo>{logo}</Logo>
        </Link>
        {authMenu}
      </Content>
    </Layout>
  );
};

export default Header;
