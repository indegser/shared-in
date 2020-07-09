import GlobalStyle from "ui/GlobalStyle";
import Head from "next/head";
import Header from "ui/header/Header";
import { useEffect } from "react";
import { useAuthStore } from "common/store";
import { auth } from "common/modules/firebase";

import "antd/dist/antd.css";

export default function ({ Component, pageProps }) {
  const updateStatus = useAuthStore((s) => s.updateStatus);
  useEffect(() => {
    auth().onAuthStateChanged((currentUser) => {
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
