import React from "react";
import Button from "../Button";

interface Props {
  children: React.ReactNode;
  hovers?: string;
  onClick?: () => void;
}

const ButtonNaked = ({ hovers, ...rest }: Props) => {
  const classes = {
    background: "transparent",
    paddings: "",
    hovers: hovers,
  };
  return <Button {...classes} {...rest} />;
};

export default ButtonNaked;
