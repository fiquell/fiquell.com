import { type AppType } from "next/dist/shared/lib/utils";
import { commissioner } from "~/constants/fonts";
import "~/styles/globals.css";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <div className={commissioner.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
