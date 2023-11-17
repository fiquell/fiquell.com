import Head from "next/head";
import { Contact, Footer, Header, Intro } from "~/components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Fiquell ✺ Frontend Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Crafting captivating websites for exciting online journeys"
        />
        <meta
          name="keywords"
          content="frontend developer, web development, digital experience specialist"
        />
        <meta name="author" content="Fiquell" />
        <meta property="og:title" content="Fiquell ✺ Frontend Developer" />
        <meta
          property="og:description"
          content="Crafting captivating websites for exciting online journeys"
        />
        <meta property="og:image" content="https://fiquell.com/logo.png" />
        <meta property="og:url" content="https://fiquell.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main>
        <Intro />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
