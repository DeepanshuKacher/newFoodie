import * as mqtt from "mqtt";
import { mqttFunction } from "./functions";

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
  });

  client.on("connect", () => {
    console.log("mqtt connected");
    alert("mqtt connected");
    client.subscribe(
      `${restaurantId}/order/${tableSectionId}/${tableNumber}`,
      { qos: 0 },
      (error) => {
        if (error) {
          console.log("mqtt connection error");
          alert("Please restart app");
        }
      }
    );
  });

  client.on("reconnect", () => {
    console.log("reconnecting");
    alert("mqtt reconnecting");
  });

  client.on("error", () => {
    console.log("some mqtt error");
    alert("mqtt error");
  });

  client.on("end", () => {
    console.log("mqtt connection end");
    alert("mqtt connection end");
  });

  client.on("message", (topic, message) => {
    mqttFunction(JSON.parse(message.toString()));
  });

  return client;
};
