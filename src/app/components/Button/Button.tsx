"use client";
import React from "react";

interface Props {
  children: React.ReactNode;
  color?: string;
  background?: string;
  paddings?: string;
  borderRadius?: string;
  hovers?: string;
  transition?: string;
  size?: "lg" | "sm";
  onClick?: () => void;
}

const Button = ({
  children,
  color = "darkMain",
  background = "firstLight",
  paddings = "px-10 py-5",
  borderRadius = "rounded-lg",
  hovers,
  transition = "transition-all duration-150 ease-in",
  size = "lg",
  onClick,
}: Props) => {
  const fonts = size === "lg" ? "text-lg" : "text-base";
  const bgColor = background.split(/(?=[A-Z])/)[0];
  const hoverClasses = hovers ? hovers : `hover:bg-${bgColor}Main`;
  const baseClasses = `${fonts} ${
    size === "lg" ? paddings : "px-7 py-3"
  } ${borderRadius}`;
  const activeClasses = `${baseClasses} bg-${background} text-${color} ${hoverClasses} ${transition}`;
  return (
    <button className={activeClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
