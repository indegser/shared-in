import Head from "next/head";
import Home from "pages/Home";

export default function Page() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
