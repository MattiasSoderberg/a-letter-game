import React from "react";
import Button from "../Button";

interface Props {
  children: React.ReactNode;
  background?: string;
  paddings?: string;
  borders?: boolean;
  borderRadius?: string;
  hovers?: string;
  classNames?: string;
  onClick?: () => void;
}

const ButtonNaked = ({
  background = "transparent",
  hovers,
  paddings = "",
  borderRadius = "",
  borders = false,
  ...rest
}: Props) => {
  const classes = {
    background: background,
    paddings: paddings,
    borderRadius: borderRadius,
    borders: borders ? "border border-darkMain" : "",
    hovers: hovers,
  };
  return <Button {...classes} {...rest} />;
};

export default ButtonNaked;
