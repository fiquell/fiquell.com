import { type AppType } from "next/dist/shared/lib/utils";
import { opensaucesans } from "~/constants/fonts";
import "~/styles/globals.css";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <div className={opensaucesans.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
