import React from "react";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  const colors = {
    orange: "fill-orange-500",
    slate: "fill-slate-500",
    white: "fill-white",
  };

  return (
    <footer className="fixed bottom-0 w-full h-12 bg-white">
      <div className="flex justify-around">
        <div
          className="w-min active:bg-orange-400 rounded-full p-2"
          onClick={() => router.push("/")}
        >
          <svg
            className="fill-slate-500 active:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
          >
            <path d="M4 21v-9.375L2.2 13 1 11.4 12 3l11 8.4-1.2 1.575-1.8-1.35V21Zm4-6q-.425 0-.713-.288Q7 14.425 7 14t.287-.713Q7.575 13 8 13t.713.287Q9 13.575 9 14t-.287.712Q8.425 15 8 15Zm4 0q-.425 0-.712-.288Q11 14.425 11 14t.288-.713Q11.575 13 12 13t.713.287Q13 13.575 13 14t-.287.712Q12.425 15 12 15Zm4 0q-.425 0-.712-.288Q15 14.425 15 14t.288-.713Q15.575 13 16 13t.712.287Q17 13.575 17 14t-.288.712Q16.425 15 16 15Z" />
          </svg>
        </div>
        <div
          className="w-min active:bg-orange-400 rounded-full p-2"
          onClick={() => router.push("/orders/cart")}
        >
          <svg
            className="fill-slate-500 active:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
          >
            <path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM5.2 4h14.75q.575 0 .875.512.3.513.025 1.038l-3.55 6.4q-.275.5-.738.775Q16.1 13 15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1V2h3.25Z" />
          </svg>
        </div>
      </div>
    </footer>
  );
}
