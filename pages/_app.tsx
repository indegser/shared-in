import GlobalStyle from "ui/GlobalStyle";
import Head from "next/head";
import Header from "ui/header/Header";
import { useEffect } from "react";
import { useAuthStore } from "common/store";
import firebase from "../src/common/firebase";

import "antd/dist/antd.css";
import Layout from "ui/Layout";

export default function ({ Component, pageProps }) {
  const updateStatus = useAuthStore((s) => s.updateStatus);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      updateStatus(currentUser);
    });
  }, [updateStatus]);

  return (
    <>
      <Head>
        <title>SharedIn - Experts' Bookmark</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="og:title" content="SharedIn - Experts' Bookmark" />
        <meta
          name="description"
          content="Find the right articles and the teams that read them."
        />
        <meta
          name="og:description"
          content="Find the right articles and the teams that read them."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <GlobalStyle />
      <Header />
      <Layout.Page>
        <Component {...pageProps} />
      </Layout.Page>
    </>
  );
}
