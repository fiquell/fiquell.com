import Head from "next/head";
import Intro from "~/components/intro";

const Home = () => {
  return (
    <>
      <Head>
        <title>Fiquell ✺ Frontend Developer</title>
      </Head>
      <main className="container">
        <Intro />
      </main>
    </>
  );
};

export default Home;
