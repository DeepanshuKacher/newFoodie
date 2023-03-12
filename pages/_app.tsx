import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import { store } from "../useFullItems/redux";
import { useEffect, useState } from "react";
import { onLoad } from "../useFullItems/functions/onload";
import { InitialLoader } from "../components/InitialLoader";
import { GlobalLoader } from "../components/GlobalLoader";
import { MqttClient } from "mqtt";
import { connectMqtt } from "../useFullItems/mqtt/initialLoad";

export default function App({ Component, pageProps }: AppProps) {
  const [initialLoad, setInitialLoad] = useState(true);
  // const [mqttClient, setMqttClient] = useState<MqttClient>();
  const [restaurantId, setrestaurantId] = useState<string>();
  const [tableNumber, settableNumber] = useState<number>();
  const [tableSectionId, settableSectionId] = useState<string>();
  const [sessionUUID, setsessionUUID] = useState<string>();

  const setLoaderFalse = () => setInitialLoad(false);

  useEffect(() => {
    (async () => {
      await onLoad(setLoaderFalse);
    })();
    const currentEnviornmentENV = process.env.ENVIORNMENT;
    console.log({ currentEnviornmentENV });
  }, []);

  useEffect(() => {
    console.log("mqtt useEffect ");
    let mqttClient: MqttClient | undefined;
    if (restaurantId && tableNumber && tableSectionId && sessionUUID)
      mqttClient = connectMqtt({
        restaurantId,
        tableNumber,
        tableSectionId,
        sessionUUID,
      });

    return () => {
      if (mqttClient) mqttClient.end();
    };
  }, [restaurantId, tableNumber, tableSectionId, sessionUUID]);

  useEffect(() => {
    console.log("store subscribe useEffect");
    const Unsubscribe = store.subscribe(() => {
      const {
        sessionUUID: item1,
        tableNumber: item2,
        tableSectionId: item3,
      } = store.getState().foodieInfo;
      const { restaurantId: item4 } = store.getState().restaurantInfo;

      if (sessionUUID !== item1) setsessionUUID(item1);
      if (tableNumber !== item2) settableNumber(item2);
      if (tableSectionId !== item3) settableSectionId(item3);
      if (restaurantId !== item4) setrestaurantId(item4);
    });

    return () => Unsubscribe();
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
