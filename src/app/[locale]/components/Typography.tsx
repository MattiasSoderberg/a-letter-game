import React from "react";

interface Props {
  children: React.ReactNode;
}

export const H1 = ({ children }: Props) => {
  const classes = {
    size: "text-3xl",
  };
  return <h1>{children}</h1>;
};
