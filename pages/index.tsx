import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>NFT Buy&Sell</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="relative h-[200vh] bg-violet-100 ">
        <Landing />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 pt-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Product
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Home;

