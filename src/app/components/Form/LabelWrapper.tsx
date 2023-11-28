import React from "react";
import { TextLarge } from "../Typography";

interface Props {
  children: React.ReactNode;
  label: string;
  name: string;
  horizontal?: boolean;
}

const LabelWrapper = ({ children, label, name, horizontal = false }: Props) => {
  return (
    <div
      className={`w-full flex ${
        horizontal ? "flex-col gap-2" : "justify-between"
      }`}
    >
      <label htmlFor={name}>
        <TextLarge>{label}</TextLarge>
      </label>
      {children}
    </div>
  );
};

export default LabelWrapper;
