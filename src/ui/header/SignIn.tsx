import styled from "@emotion/styled";
import api from "common/api";

const Layout = styled.button`
  border-radius: 8px;
  padding: 0.75em 1em;
  outline: #ddd;
  color: rgba(1, 1, 1, 0.77);
  display: flex;
  align-items: center;
  cursor: default;
  user-select: none;
  background: white;
  border: none;

  &:hover,
  &:focus {
    color: #286ed0;
    fill: #286ed0;
    background: #e9f4ff;
  }
`;

const Text = styled.span`
  font-size: 14px;
  margin-left: 0.5em;
  font-weight: 500;
`;

const Github = styled.svg`
  width: 17px;
  height: 17px;
  display: block;
  fill: currentColor;
`;

const SignIn = () => {
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
      <Github viewBox="0 0 20 20">
        <path d="M10 0C4.476 0 0 4.477 0 10c0 4.418 2.865 8.166 6.84 9.49.5.09.68-.218.68-.483 0-.237-.007-.866-.012-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.157-1.11-1.464-1.11-1.464-.907-.62.07-.608.07-.608 1.003.07 1.53 1.03 1.53 1.03.893 1.53 2.342 1.087 2.912.83.09-.645.35-1.085.634-1.335-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.683-.105-.253-.448-1.27.096-2.647 0 0 .84-.268 2.75 1.026C8.294 4.95 9.15 4.84 10 4.836c.85.004 1.705.115 2.504.337 1.91-1.294 2.747-1.026 2.747-1.026.548 1.377.204 2.394.1 2.647.64.7 1.03 1.592 1.03 2.683 0 3.842-2.34 4.687-4.566 4.935.36.308.678.92.678 1.852 0 1.336-.01 2.415-.01 2.743 0 .267.18.578.687.48C17.14 18.163 20 14.417 20 10c0-5.522-4.478-10-10-10" />
      </Github>
      <Text>Sign in with Github</Text>
    </Layout>
  );
};

export default SignIn;
