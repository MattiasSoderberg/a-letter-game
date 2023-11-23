"use client";
import React from "react";
import Button from "../Button";

interface Props {
  children: React.ReactNode;
  background?: string;
  size?: "lg" | "sm";
  onClick?: () => void;
}

const ButtonStandard = ({ ...rest }: Props) => {
  return <Button {...rest} />;
};

export default ButtonStandard;
