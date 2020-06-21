import GlobalStyle from "ui/GlobalStyle";
import Head from "next/head";
import Header from "ui/header/Header";

export default function ({ Component, pageProps }) {
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
