import styled from "@emotion/styled";

const Layout = styled.nav`
  padding: 1em 1em 0em 1em;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: 900;
`;

const Header = () => {
  return (
    <Layout>
      <Content>
        <Logo>현업의 북마크</Logo>
        <img src="/logo.svg" />
      </Content>
    </Layout>
  );
};

export default Header;
