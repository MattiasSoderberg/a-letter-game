"use client";
import React from "react";
import Button from "../Button";

interface Props {
  children: React.ReactNode;
  background?: string;
  paddings?: string;
  disabled?: boolean;
  size?: "lg" | "sm" | "xs";
  type?: "button" | "submit";
  onClick?: () => void;
}

const ButtonStandard = ({ ...rest }: Props) => {
  return <Button {...rest} />;
};

export default ButtonStandard;
