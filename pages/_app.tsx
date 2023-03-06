import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import { store } from "../useFullItems/redux";
import { useEffect, useState } from "react";
import { onLoad } from "../useFullItems/functions/onload";
import { InitialLoader } from "../components/InitialLoader";
import { GlobalLoader } from "../components/GlobalLoader";

export default function App({ Component, pageProps }: AppProps) {
  const [initialLoad, setInitialLoad] = useState(true);

  const setLoaderFalse = () => setInitialLoad(false);

  useEffect(() => {
    onLoad(setLoaderFalse);
  }, []);

  if (initialLoad) return <InitialLoader />;
  return (
    <>
      <Provider store={store}>
        <GlobalLoader />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
