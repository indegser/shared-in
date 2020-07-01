import styled from "@emotion/styled";
import { useState } from "react";
import { auth, db } from "common/modules/firebase";

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
    const provider = new auth.GithubAuthProvider();
    const { user } = await auth().signInWithPopup(provider);
    const doc = await db.collection("users").doc(user.uid).set({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });

    console.log(doc);
  };

  // const nextMessage = 'Share articles your team read today.'
  const [message] = useState(
    "Connect Github account to share your team's links"
  );

  return (
    <Layout data-testid="sign-in-with-github" onClick={signInWithGithub}>
      <Github src="/images/github.svg"></Github>
      <NoBio>{message}</NoBio>
    </Layout>
  );
};

export default ConnectGithub;
