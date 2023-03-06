import React from "react";

function InitialLoader() {
  return (
    <div className="h-screen flex justify-center items-center bg-zinc-700">
      <img src="/icons/spinner.svg" className="h-28 animate-spin" alt="" />
    </div>
  );
}

export { InitialLoader };
