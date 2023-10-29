import Head from "next/head";
import Contact from "~/components/contact";
import Footer from "~/components/footer";
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
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
