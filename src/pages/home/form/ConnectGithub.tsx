import styled from "@emotion/styled";
import api from "common/api";

const Layout = styled.div`
  border-radius: 8px;
  padding: 0.75em 1em;
  background: #e9f4ff;
  color: rgba(1, 1, 1, 0.77);
  margin: 1em 0;
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 0.5em;
  align-items: center;
  cursor: default;
  user-select: none;
`;

const NoBio = styled.div`
  font-size: 14px;
`;

const Github = styled.img`
  display: block;
`;

const ConnectGithub = () => {
  const signInWithGithub = async () => {
    const { user } = await api.connectGithub();
    await api.createUser({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  return (
    <Layout data-testid="sign-in-with-github" onClick={signInWithGithub}>
      <Github src="/images/github.svg"></Github>
      <NoBio>Connect Github account</NoBio>
    </Layout>
  );
};

export default ConnectGithub;
