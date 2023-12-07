import React from "react";

interface Props {
  color?: string;
  horizontal?: boolean;
}

const Divider = ({ color = "firstLight", horizontal = false }: Props) => {
  return (
    <div
      className={`${
        horizontal ? "w-[1px] h-full" : "w-full h-[1px]"
      } bg-${color}`}
    />
  );
};

export default Divider;
