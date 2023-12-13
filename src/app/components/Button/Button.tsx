"use client";
import React from "react";

interface Props {
  children: React.ReactNode;
  color?: string;
  background?: string;
  paddings?: string;
  borders?: string;
  borderRadius?: string;
  classNames?: string;
  hovers?: string;
  transition?: string;
  disabled?: boolean;
  size?: "lg" | "sm" | "xs";
  type?: "button" | "submit";
  onClick?: () => void;
}

const Button = ({
  children,
  color = "darkMain",
  background = "firstLight",
  paddings = "px-10 py-5",
  borders = "",
  borderRadius = "rounded-lg",
  classNames,
  hovers,
  transition = "transition-all duration-150 ease-in",
  disabled = false,
  size = "lg",
  type = "button",
  onClick,
}: Props) => {
  const fonts =
    size === "lg" ? "text-lg" : size === "sm" ? "text-base" : "text-sm";
  const bgColor = background.split(/(?=[A-Z])/)[0];
  const hoverClasses = hovers ? hovers : `hover:bg-${bgColor}Main`;
  const baseClasses = `${fonts} ${
    size === "lg" ? paddings : size === "sm" ? "px-7 py-3" : "px-2 py-1"
  } ${borderRadius} ${borders} ${classNames}`;
  const activeClasses = `${baseClasses} bg-${background} text-${color} ${hoverClasses} ${transition} focus:bg-${background}`;
  const disabledClasses = `${baseClasses} bg-lightDark text-darkLight focus:bg-lightDark`;
  return (
    <button
      disabled={disabled}
      type={type}
      className={disabled ? disabledClasses : activeClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
