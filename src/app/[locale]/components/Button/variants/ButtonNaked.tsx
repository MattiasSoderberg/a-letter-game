import React from "react";
import Button from "../Button";

interface Props {
  children: React.ReactNode;
  hovers: string;
  onClick: () => void;
}

const ButtonNaked = ({ hovers, onClick, ...rest }: Props) => {
  const classes = {
    background: "",
    paddings: "",
    hovers: hovers,
  };
  return <Button {...classes} {...rest} />;
};

export default ButtonNaked;
