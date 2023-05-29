import React from "react";
import { Dish } from "../../interfaces";

const tableData = (
  dish: Dish,
  halfFull: keyof Dish["price"]["large"],
  size: keyof Dish["price"]
) => {
  if (dish?.price?.[size]?.[halfFull])
    return <td>₹{dish.price[size][halfFull]}</td>;
  else return <td>Nil</td>;
};
const tableRow = (dish: Dish, size: keyof Dish["price"]) => (
  <tr>
    <th>{size}</th>
    {tableData(dish, "half", size)}
    {tableData(dish, "full", size)}
  </tr>
);

interface Props {
  dish: Dish;
}
function TableBody(props: Props) {
  const { dish } = props;

  return (
    <tbody>
      <tr>
        <th></th>
        <th>Half</th>
        <th>Full</th>
      </tr>
      {tableRow(dish, "large")}
      {tableRow(dish, "medium")}
      {tableRow(dish, "small")}
    </tbody>
  );
}

export default TableBody;
