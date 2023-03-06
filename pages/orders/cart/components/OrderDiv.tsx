import { Dish, Order } from "../../../../interfaces";
import { ui_constants } from "../../../../useFullItems/constants";
import {
  calculatePrice,
  getRandamValue,
} from "../../../../useFullItems/functions";

interface Props {
  dish: Dish;
  order: Order;
  deleteCartItem: (item: Order) => void;
}
export const NewOrderDiv = (props: Props) => {
  const { dish, order, deleteCartItem } = props;
  const bgColor = getRandamValue(ui_constants.colors.background);

  return (
    <div className={`border p-2 rounded-md relative ${bgColor}`}>
      <button
        className="bg-red-500 text-lg px-2 rounded-md absolute right-2 -top-3 flex flex-row space-x-1 items-center"
        onClick={() => deleteCartItem(order)}
      >
        <span className="text-white">Delete</span>
        <img src="/icons/delete.svg" width={20} alt="edit icon" />
      </button>
      <h1 className="text-2xl border-2 px-1 rounded-md inline mr-2 border-red-400">
        {dish.name}
      </h1>
      <p className="inline">{order.user_description}</p>
      <hr className="my-1" />
      <div className="flex flex-row">
        <table className="w-10/12 text-center">
          <thead>
            <tr>
              <th></th>
              <th>Full</th>
              <th>Half</th>
              {/* <th>Total</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{order.size}</th>
              <td>{order.fullQuantity}</td>
              <td>{order.halfQuantity}</td>
              {/* <td>₹35</td> */}
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col justify-around flex-1 items-center font-extrabold">
          <p>Total</p>
          <p>₹{calculatePrice(order, dish)}</p>
        </div>
      </div>
      {/*    <div className="space-x-1 space-y-1 ">
          <AddOnsSpan />
          <AddOnsSpan />
          <AddOnsSpan />
          <AddOnsSpan />
          <span className="border border-white p-1 inline-block rounded-md font-bold">
            Addons total ₹40
          </span>
        </div> */}
    </div>
  );
};
