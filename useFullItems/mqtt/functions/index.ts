import { pushToOrderContainer } from "./pushOrderContainer";
import { updateOrderStatus } from "./updateOrderStatus";

const mqttPayloadCode = {
  tableStatus: "tableStatus",
  dishOrder: "dishOrder",
  updateOrder: "updateOrder",
  cardDishOrder: "cardDishOrder",
};

export const mqttFunction = ({
  code,
  message,
}: {
  code: keyof typeof mqttPayloadCode;
  message: any;
}) => {
  switch (code) {
    case "updateOrder":
      updateOrderStatus(message);
      break;
    case "dishOrder":
      pushToOrderContainer(message);
      break;

    default:
      break;
  }
};
