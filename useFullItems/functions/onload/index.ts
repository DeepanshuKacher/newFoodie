import { MqttClient } from "mqtt";
import { initialFetch } from "./initialFetch";

export const onLoad = async (
  setLoaderFalse: () => void,
) => {
  try {
    await initialFetch();

    setLoaderFalse();
  } catch (error) {
    console.log({ "Initital Load Error": error });
    alert("Some Error Please reload the page");
  }
};
