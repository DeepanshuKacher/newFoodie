import React from "react";
import { PriceStructure } from "../../interfaces";

interface Props {
  priceStructure: PriceStructure;
}

function TableBody(props: Props) {
  const { priceStructure } = props;

  const { Large, Medium, Small } = priceStructure;

  return (
    <tbody>
      <tr>
        <th></th>
        <th>Half</th>
        <th>Full</th>
      </tr>
      {Large ? (
        <tr>
          <th>Large</th>
          <td>
            {Large.half ? "₹" : null}
            {Large.half || ""}
          </td>
          <td>
            {Large.full ? "₹" : null}
            {Large.full || ""}
          </td>
        </tr>
      ) : null}
      {Medium ? (
        <tr>
          <th>Medium</th>
          <td>
            {Medium.half ? "₹" : null}
            {Medium.half || ""}
          </td>
          <td>
            {Medium.full ? "₹" : null}
            {Medium.full || ""}
          </td>
        </tr>
      ) : null}
      {Small ? (
        <tr>
          <th>Small</th>
          <td>
            {Small.half ? "₹" : null}
            {Small.half || ""}
          </td>
          <td>
            {Small.full ? "₹" : null}
            {Small.full || ""}
          </td>
        </tr>
      ) : null}
    </tbody>
  );
}

export default TableBody;
