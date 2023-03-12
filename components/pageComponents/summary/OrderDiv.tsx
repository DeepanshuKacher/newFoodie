import { Dish, Order } from "../../../interfaces";
import { calculatePrice } from "../../../useFullItems/functions";


interface Props {
  order: Order;
  dish: Dish;
  backgroundColor: string;
  // showDetailModal: () => void;
}

const OrderDiv = (props: Props) => {
  const { order, dish, backgroundColor } = props;
  const orderPositionStatus = {
    queue: {
      border: "border-red-500",
      text: "text-red-500",
      status: "Queue",
    },
    preparing: {
      border: "border-orange-500",
      text: "text-orange-500",
      status: "Preparing",
    },
    completed: {
      border: "border-green-500",
      text: "text-green-500",
      status: "Prepared",
    },
  };
  const orderPosition =
    order.chefAssign && order.completed
      ? "completed"
      : order.chefAssign && !order.completed
      ? "preparing"
      : "queue";
  return (
    <div className={`border p-2 rounded-md ${backgroundColor}`}>
      <div className="flex items-start justify-between">
        <h1 className="text-2xl border-2 px-1 rounded-md inline mr-2 border-red-400">
          {dish.name}
        </h1>
        <h1
          className={`border-2 ${orderPositionStatus[orderPosition].border} ${orderPositionStatus[orderPosition].text} bg-white text-xl rounded-md px-1`}
        >
          {orderPositionStatus[orderPosition].status}
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
