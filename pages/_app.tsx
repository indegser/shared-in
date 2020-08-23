import GlobalStyle from "ui/GlobalStyle";
import Head from "next/head";
import Header from "ui/header/Header";
import { useEffect } from "react";
import { useAuthStore } from "common/store";
import firebase from "../src/common/firebase";

import "antd/dist/antd.css";

export default function ({ Component, pageProps }) {
  const updateStatus = useAuthStore((s) => s.updateStatus);
  useEffect(() => {
    const shouldCheckEmailLink = firebase
      .auth()
      .isSignInWithEmailLink(location.href);

    if (shouldCheckEmailLink) {
      var email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt("Please provide your email for confirmation");
      }

      firebase
        .auth()
        .signInWithEmailLink(email, window.location.href)
        .then(function (result) {
          // Clear email from storage.
          window.localStorage.removeItem("emailForSignIn");
          location.replace("/");
        })
        .catch(function (error) {
          console.log(error);
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        });
    }

    firebase.auth().onAuthStateChanged((currentUser) => {
      updateStatus(currentUser);
    });
  }, [updateStatus]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
