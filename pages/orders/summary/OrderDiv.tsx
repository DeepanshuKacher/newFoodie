import { Dish, Order } from "../../../interfaces";
import { ui_constants } from "../../../useFullItems/constants";
import {
  calculatePrice,
  getRandamValue,
} from "../../../useFullItems/functions";

interface Props {
  order: Order;
  dish: Dish;
  backgroundColor: string;
  // showDetailModal: () => void;
}

const OrderDiv = (props: Props) => {
  const { order, dish, backgroundColor } = props;
  const colors = {
    queue: {
      border: "border-red-500",
      text: "text-red-500",
    },
    preparing: {
      border: "border-orange-500",
      text: "text-orange-500",
    },
    completed: {
      border: "border-green-500",
      text: "text-green-500",
    },
  };
  return (
    <div className={`border p-2 rounded-md ${backgroundColor}`}>
      <div className="flex items-start justify-between">
        <h1 className="text-2xl border-2 px-1 rounded-md inline mr-2 border-red-400">
          {dish.name}
        </h1>
        <h1
          className={`border-2 ${colors.queue.border} ${colors.queue.text} bg-white text-xl rounded-md px-1`}
        >
          Queue
        </h1>
      </div>
      <br />
      <div className="flex items-center justify-between">
        <table className="w-10/12 text-center">
          <thead>
            <tr>
              <th></th>
              <th>Full</th>
              <th>Half</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{order.size}</th>
              <td>{order.fullQuantity}</td>
              <td>{order.halfQuantity}</td>
            </tr>

            <tr>
              <th>Total</th>
              <th colSpan={2}>₹{calculatePrice(order, dish)}</th>
            </tr>
          </tbody>
        </table>
        {/* <img src="/icons/info.svg" alt="info-icon" onClick={showDetailModal} /> */}
      </div>
      {order.user_description && (
        <h5>Description:- {order.user_description}</h5>
      )}
    </div>
  );
};

export { OrderDiv };
