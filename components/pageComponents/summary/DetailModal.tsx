import { useState } from "react";
// import { ButtonFill } from "../common_components";

interface Props {
  handleModal: (value: boolean) => void;
  showModal: boolean;
}

function DetailModal({ handleModal, showModal }: Props) {
  const showClose = {
    show: "flex",
    hide: "hidden",
  };

  return (
    <div
      className={`fixed inset-0 bg-[#000000b3] ${
        showModal ? showClose.show : showClose.hide
      }`}
    >
      <div className="w-full mt-4 h-min sm:h-auto sm:mb-14 overflow-auto bg-red-200 rounded-2xl p-3">
        <h3 className="text-xl text-center mb-2 font-bold">Chicken Biryani</h3>

        <div aria-label="upper div">
          <img
            className=" sm:hidden object-cover rounded-md"
            src="/images/default_food.jpg"
            alt="food image"
          />
          <img
            className=" hidden sm:block w-1/2 object-cover rounded-md"
            src="/images/default_food.jpg"
            alt="food image"
          />
        </div>
        <hr className="my-3" />
        <div aria-label="main div" className="space-y-3">
          <div aria-label="add one">
            <table className="text-left min-w-full">
              <tbody className="">
                <tr>
                  <th></th>
                  <th>Half</th>
                  <th>Full</th>
                  <th>Total</th>
                </tr>
                <tr>
                  <th>Large</th>
                  <td>8</td>
                  <td>5</td>
                  <th>₹50</th>
                </tr>
                <tr>
                  <th>Medium</th>
                  <td>10</td>
                  <td>4</td>
                  <th>₹50</th>
                </tr>
                <tr>
                  <th>Small</th>
                  <td>8</td>
                  <td>2</td>
                  <th>₹50</th>
                </tr>
                <tr>
                  <td>Extra-cheese</td>
                  <td></td>
                  <td></td>
                  <th>₹5</th>
                </tr>
                <tr>
                  <td>Extra-cheese</td>
                  <td></td>
                  <td></td>
                  <th>₹5</th>
                </tr>
                <tr>
                  <td>Extra-cheese</td>
                  <td></td>
                  <td></td>
                  <th>₹5</th>
                </tr>
                <tr>
                  <th>Total</th>
                  <td></td>
                  <td></td>
                  <th>₹5000</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            </p>
          </div>
          <div className="flex flex-row space-x-1">
            <button
              className="border py-1 px-2 text-lg rounded-md bg-green-600  w-1/2"
              onClick={() => handleModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
