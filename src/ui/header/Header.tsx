import styled from "@emotion/styled";
import Link from "next/link";
import SignIn from "./SignIn";
import { useAuthStore, AuthState } from "common/store";
import UserMenu from "./UserMenu";
import Layout from "ui/Layout";
import Spinner from "ui/Spinner";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
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

  const renderAuthMenu = () => {
    switch (authStatus) {
      case AuthState.Authenticated: {
        return <UserMenu />;
      }
      case AuthState.Anonymous: {
        return <SignIn />;
      }
      default: {
        return <Spinner />;
      }
    }
  };

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
    <nav>
      <Layout.Page>
        <Content>
          <Link href="/" passHref>
            <Logo>{logo}</Logo>
          </Link>
          {renderAuthMenu()}
        </Content>
      </Layout.Page>
    </nav>
  );
};

export default Header;
