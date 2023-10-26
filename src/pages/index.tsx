import Head from "next/head";
import Header from "~/components/header";
import Intro from "~/components/intro";

const Home = () => {
  return (
    <>
      <Head>
        <title>Fiquell ✺ Frontend Developer</title>
      </Head>
      <Header />
      <main className="container">
        <Intro />
      </main>
    </>
  );
};

export default Home;
