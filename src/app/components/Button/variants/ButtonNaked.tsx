import React from "react";
import Button from "../Button";

interface Props {
  children: React.ReactNode;
  paddings?: string;
  borders?: boolean;
  hovers?: string;
  onClick?: () => void;
}

const ButtonNaked = ({ hovers, borders = false, ...rest }: Props) => {
  const classes = {
    background: "transparent",
    paddings: "",
    borders: borders ? "border border-1 border-darkMain" : "",
    hovers: hovers,
  };
  return <Button {...classes} {...rest} />;
};

export default ButtonNaked;
