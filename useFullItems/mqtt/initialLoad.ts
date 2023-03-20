import * as mqtt from "mqtt";
import { mqttFunction } from "./functions";
import { constants } from "../constants";

// store.subscribe(() => {
//   const { tableNumber, tableSectionId } = store.getState().foodieInfo;
//   const { restaurantId } = store.getState().restaurantInfo;
//   console.log(tableNumber, tableSectionId, restaurantId);
// });

// export const lol = "lol";

export const connectMqtt = ({
  restaurantId,
  sessionUUID,
  tableNumber,
  tableSectionId,
}: {
  sessionUUID: string;
  restaurantId: string;
  tableSectionId: string;
  tableNumber: number;
}) => {
  const client = mqtt.connect({
    hostname: "mqtt.eatrofoods.com",
    port: 8883,
    clientId: sessionUUID,
    protocol: "wss",
    reconnectPeriod: 1000,
  });

  client.on("connect", () => {
    if (constants.showConsoleLogs) console.log("mqtt connected");
    if (constants.showAlerts) alert("mqtt connected");
    client.subscribe(
      `${restaurantId}/order/${tableSectionId}/${tableNumber}`,
      { qos: 0 },
      (error) => {
        if (error) {
          if (constants.showConsoleLogs) console.log("mqtt connection error");
          if (constants.showAlerts) alert("Please restart app");
        }
      }
    );
  });

  client.on("reconnect", () => {
    if (constants.showConsoleLogs) console.log("reconnecting");
    if (constants.showAlerts) alert("mqtt reconnecting");
  });

  client.on("error", () => {
    if (constants.showConsoleLogs) console.log("some mqtt error");
    if (constants.showAlerts) alert("mqtt error");
  });

  client.on("end", () => {
    if (constants.showConsoleLogs) console.log("mqtt connection end");
    if (constants.showAlerts) alert("mqtt connection end");
  });

  client.on("message", (topic, message) => {
    mqttFunction(JSON.parse(message.toString()));
  });

  return client;
};
