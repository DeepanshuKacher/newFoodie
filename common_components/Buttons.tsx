import React from "react";
import { Colors } from "./ui-utility";

interface Props {
  variant: "primary" | "secondary" | "danger";
  insideText: string;
}

function ButtonFill({ variant = "primary", insideText }: Props) {
  return (
    <div className={`border w-min py-1 px-2 rounded-md ${Colors[variant]}`}>
      {insideText}
    </div>
  );
}

export { ButtonFill };
