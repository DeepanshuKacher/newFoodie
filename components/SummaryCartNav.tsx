import { useState } from "react";
import { useRouter } from "next/router";

const CartNavItem = ({
  changeBg,
  title,
  onclick,
}: {
  title: string;
  //   select: "Cart" | "Summary";
  changeBg: boolean;
  onclick: () => void;
}) => {
  const bg = "bg-orange-500";

  return (
    <button
      className={`w-full flex justify-center ${changeBg && bg}`}
      onClick={onclick}
    >
      <h2 className="px-1 my-1 rounded-md bg-white text-xl">{title}</h2>
    </button>
  );
};

export const CartNav = () => {
  const [selected, setSelect] = useState<"Cart" | "Summary">("Cart");

  const router = useRouter();

  return (
    <header className="bg-white">
      <div className="flex justify-around border-b-2">
        <CartNavItem
          title="Cart"
          //   select={selected}
          changeBg={router.pathname === "/orders/cart"}
          onclick={() => {
            // setSelect("Cart");
            router.push("/orders/cart");
          }}
        />
        <span className="border"></span>
        <CartNavItem
          title="Summary"
          changeBg={router.pathname === "/orders/summary"}
          //   select={selected}
          onclick={() => {
            // setSelect("Summary");
            router.push("/orders/summary");
          }}
        />
      </div>
    </header>
  );
};
