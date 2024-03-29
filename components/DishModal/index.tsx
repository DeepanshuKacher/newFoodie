import { useState, useEffect } from "react";
import { Dish } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../useFullItems/redux";
import { axiosPostFunction, controllerUrls } from "../../useFullItems/axios";
import TableBody from "./tableBody";
import { hideLoader, showLoader } from "../../useFullItems/redux/globalLoader";
// import { ButtonFill } from "../common_components";

interface Props {
  handleModal: () => void;
  dishDetail: Dish | undefined;
}

function DishModal(props: Props) {
  const { dishDetail, handleModal } = props;

  const dispatch = useAppDispatch();

  const [halfQuantity, setHalfQuantity] = useState<number>();
  const [fullQuantity, setFullQuantity] = useState<number>();
  const [user_description, setUserDescription] = useState("");
  const [size, setSize] = useState<keyof Dish["price"]>();

  const { sessionUUID, tableNumber, tableSectionId } = useAppSelector(
    (store) => store.foodieInfo
  );

  const deleteFunction = () => {
    handleModal();
  };

  const quantitySelect = {
    select: "bg-green-600",
    noSelected: "bg-white",
    notExist: "bg-gray-500",
    // notExistHalfFull: "bg-blue-600",
  };

  const orderFoor = () => {
    if (!size) return alert("Please select size");
    if (!(halfQuantity || fullQuantity)) return alert("Please select quantity");
    dispatch(showLoader());
    axiosPostFunction({
      parentUrl: controllerUrls.orders,
      data: {
        dishId: dishDetail?.id,
        tableSectionId: tableSectionId,
        tableNumber: tableNumber,
        sessionId: sessionUUID,
        user_description,
        size,
        halfQuantity: halfQuantity,
        fullQuantity: fullQuantity,
      },
      thenFunction: () => {
        dispatch(hideLoader());
        deleteFunction();
      },
    });
  };

  const addToCart = () => {
    if (!size) return alert("Please select size");
    if (!(halfQuantity || fullQuantity)) return alert("Please select quantity");
    dispatch(showLoader());
    axiosPostFunction({
      parentUrl: controllerUrls.cart,
      data: {
        dishId: dishDetail?.id,
        tableSectionId: tableSectionId,
        tableNumber: tableNumber,
        sessionId: sessionUUID,
        user_description,
        size,
        halfQuantity: halfQuantity,
        fullQuantity: fullQuantity,
      },
      thenFunction: () => {
        dispatch(hideLoader());
        deleteFunction();
      },
    });
  };

  const toggleQuantity = (halfOrFull: "half" | "full", quantity: number) => {
    if (halfOrFull === "full") {
      if (fullQuantity === quantity) setFullQuantity(undefined);
      else setFullQuantity(quantity);
    } else if (halfOrFull === "half") {
      if (halfQuantity === quantity) setHalfQuantity(undefined);
      else setHalfQuantity(quantity);
    }
  };

  const selectQuantity = (halfOrFull: "half" | "full", quantity: number) => {
    if (dishDetail) {
      if (!size) return alert("Please Select Size");
      if (dishDetail?.price?.[size]?.[halfOrFull]) {
        // if (halfOrFull === "full") setFullQuantity(quantity);
        // else if (halfOrFull === "half") setHalfQuantity(quantity);
        toggleQuantity(halfOrFull, quantity);
      } else {
        alert(`${halfOrFull} quantity not available`);
      }
    }
  };

  const selectSize = (size: keyof Dish["price"]) => {
    if (dishDetail) {
      if (!dishDetail?.["price"]?.[size])
        return alert(`${size} size is not available`);
      setSize(size);
      setHalfQuantity(undefined);
      setFullQuantity(undefined);
    }
  };

  const returnTrueIfSizeExistForDish_inpureFunction = (
    size: keyof Dish["price"]
  ) => {
    if (dishDetail?.price?.[size]) return true;
    else return false;
  };

  const numbersBackgroundColor = (
    halfOrFull: "half" | "full",
    number: number
  ) => {
    if (halfOrFull === "full")
      return size
        ? dishDetail?.price?.[size]?.[halfOrFull]
          ? fullQuantity === number
            ? quantitySelect.select
            : quantitySelect.noSelected
          : quantitySelect.notExist
        : quantitySelect.noSelected;
    else if (halfOrFull === "half")
      return size
        ? dishDetail?.price?.[size]?.[halfOrFull]
          ? halfQuantity === number
            ? quantitySelect.select
            : quantitySelect.noSelected
          : quantitySelect.notExist
        : quantitySelect.noSelected;
  };

  return (
    <div className={`fixed inset-0 bg-[#000000b3] flex`}>
      <div className="w-full mt-4 mb-16 overflow-auto bg-red-200 rounded-2xl p-3">
        <div aria-label="upper div" className="flex gap-x-1">
          <img
            className="w-1/2 object-cover rounded-md"
            src={
              dishDetail?.imageUrl
                ? dishDetail?.imageUrl
                : "/images/default_food.jpg"
            }
            alt="food image"
          />
          <div className="flex-1 items-center flex flex-col">
            <h3 className="text-xl font-bold">{dishDetail?.name}</h3>
            <p className="leading-none my-1">{dishDetail?.description}</p>
            <table className="text-left min-w-full">
              <TableBody dish={dishDetail!} />
            </table>
          </div>
        </div>
        <hr className="my-3" />
        <div aria-label="main div" className="space-y-3">
          <div className="flex flex-row justify-around text-lg">
            <h4 className="font-semibold">Size</h4>
            <div className="flex flex-row space-x-2">
              <button
                onClick={() => selectSize("large")}
                // disabled={!foodPrice.Large}
                className={`px-2 border rounded-md ${
                  returnTrueIfSizeExistForDish_inpureFunction("large")
                    ? size === "large"
                      ? quantitySelect.select
                      : quantitySelect.noSelected
                    : quantitySelect.notExist
                }`}
              >
                Large
              </button>
              <button
                onClick={() => selectSize("medium")}
                value="Medium"
                // disabled={!foodPrice.Medium}
                className={`px-2 border rounded-md ${
                  returnTrueIfSizeExistForDish_inpureFunction("medium")
                    ? size === "medium"
                      ? quantitySelect.select
                      : quantitySelect.noSelected
                    : quantitySelect.notExist
                }`}
              >
                Medium
              </button>
              <button
                onClick={() => selectSize("small")}
                value="Small"
                // disabled={!returnTrueIfSizeExistForDish_inpureFunction("small")}
                className={`px-2 border rounded-md ${
                  returnTrueIfSizeExistForDish_inpureFunction("small")
                    ? size === "small"
                      ? quantitySelect.select
                      : quantitySelect.noSelected
                    : quantitySelect.notExist
                }`}
              >
                Small
              </button>
            </div>
          </div>
          <div aria-label="select quantity" className="space-y-1">
            <div className="flex flex-row justify-around text-base">
              <h5 className="font-semibold">Half</h5>
              <div className="flex space-x-2">
                <span
                  onClick={() => selectQuantity("half", 1)}
                  className={`${numbersBackgroundColor(
                    "half",
                    1
                  )} px-2 flex justify-center items-center rounded-full`}
                >
                  1
                </span>
                <span
                  onClick={() => selectQuantity("half", 2)}
                  className={`${numbersBackgroundColor(
                    "half",
                    2
                  )} px-2 flex justify-center items-center rounded-full`}
                >
                  2
                </span>
                <span
                  onClick={() => selectQuantity("half", 3)}
                  className={`${numbersBackgroundColor(
                    "half",
                    3
                  )} px-2 flex justify-center items-center rounded-full`}
                >
                  3
                </span>
                <span
                  onClick={() => selectQuantity("half", 4)}
                  className={`${numbersBackgroundColor(
                    "half",
                    4
                  )} px-2 flex justify-center items-center rounded-full`}
                >
                  4
                </span>
                <input
                  className={`${
                    // halfQuantity! > 4
                    //   ? quantitySelect.select
                    //   : quantitySelect.noSelected

                    size
                      ? dishDetail?.price?.[size]?.half
                        ? halfQuantity! > 4
                          ? quantitySelect.select
                          : quantitySelect.noSelected
                        : quantitySelect.notExist
                      : quantitySelect.noSelected
                  } w-20 text-center rounded-lg outline-none`}
                  type="number"
                  placeholder="custom"
                  value={halfQuantity! > 0 ? halfQuantity : ""}
                  onChange={(e) => {
                    const intvalue = parseInt(e.target.value);
                    if (typeof intvalue === "number")
                      selectQuantity("half", intvalue);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-row justify-around text-base">
              <h5 className="font-semibold">Full</h5>
              <div className="flex space-x-2">
                <span
                  onClick={() => selectQuantity("full", 1)}
                  className={`${numbersBackgroundColor(
                    "full",
                    1
                  )} px-2 flex justify-center items-center rounded-full`}
                >
                  1
                </span>
                <span
                  onClick={() => selectQuantity("full", 2)}
                  className={`${numbersBackgroundColor(
                    "full",
                    2
                  )} px-2 flex justify-center items-center rounded-full`}
                >
                  2
                </span>
                <span
                  onClick={() => selectQuantity("full", 3)}
                  className={`${numbersBackgroundColor(
                    "full",
                    3
                  )} px-2 flex justify-center items-center rounded-full`}
                >
                  3
                </span>
                <span
                  onClick={() => selectQuantity("full", 4)}
                  className={`${numbersBackgroundColor(
                    "full",
                    4
                  )} px-2 flex justify-center items-center rounded-full`}
                >
                  4
                </span>
                <input
                  className={`${
                    size
                      ? dishDetail?.price?.[size]?.full
                        ? fullQuantity! > 4
                          ? quantitySelect.select
                          : quantitySelect.noSelected
                        : quantitySelect.notExist
                      : quantitySelect.noSelected
                  } w-20 text-center rounded-lg outline-none`}
                  type="number"
                  placeholder="custom"
                  value={fullQuantity! > 0 ? fullQuantity : ""}
                  onChange={(e) => {
                    const intvalue = parseInt(e.target.value);
                    if (typeof intvalue === "number")
                      selectQuantity("full", intvalue);
                  }}
                />
              </div>
            </div>
          </div>
          {/*     <div aria-label="add one">
            <h5 className="text-lg font-semibold pl-2">Addons</h5>
            <div
              className="flex flex-wrap gap-1 overflow-auto"
              style={{ maxHeight: "8rem" }}
            >
              {fakeItem.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border flex flex-col items-center px-2 rounded-md drop-shadow-md"
                  >
                    <p>{item.itemName}</p>
                    <span>₹{item.price}</span>
                  </div>
                );
              })}
            </div>
          </div> */}
          <div className="text-center">
            <input
              type="text"
              className="px-2 rounded-md text-lg"
              placeholder="add some description"
              value={user_description}
              onChange={(e) => setUserDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-row space-x-1">
            <button
              onClick={deleteFunction}
              className="border py-1 px-2 text-lg rounded-md bg-red-600"
            >
              <img src="/icons/delete.svg" width={24} alt="" />
            </button>
            <button
              onClick={orderFoor}
              className="border py-1 px-2 text-lg rounded-md bg-green-600 flex-1"
            >
              Order now
            </button>
            <button
              onClick={addToCart}
              className="border py-1 px-2 text-lg rounded-md bg-orange-600 flex-1"
            >
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishModal;
