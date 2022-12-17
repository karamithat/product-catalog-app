import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>NFT Buy&Sell</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <Landing />
      </main>
    </div>
  );
}
