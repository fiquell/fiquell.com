import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { type AppType } from "next/dist/shared/lib/utils";
import { opensaucesans } from "~/constants/fonts";
import "~/styles/globals.css";

const App: AppType = ({ Component, pageProps }) => {
  gsap.registerPlugin(ScrollToPlugin);

  return (
    <div className={opensaucesans.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
