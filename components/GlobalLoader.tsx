import React from "react";
import { useAppSelector } from "../useFullItems/redux";

const show = { show: "flex", hide: "hidden" };

function GlobalLoader() {
  const globalLoaderStatus = useAppSelector((store) => store.globalLoader.show);
  return (
    <div
      className={`h-screen justify-center items-center z-10 fixed inset-0 bg-[#000000b0] ${
        globalLoaderStatus ? show.show : show.hide
      }`}
    >
      <img
        src="/icons/spinner-white.svg"
        className="h-28 animate-spin"
        alt="loading spinne"
      />
    </div>
  );
}

export { GlobalLoader };
