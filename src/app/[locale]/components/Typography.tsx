import React from "react";

interface Props {
  children: React.ReactNode;
  color?: string;
}

const globalStyles = {
  color: "text-darkMain",
};

export const H1 = ({ children }: Props) => {
  const classes = {
    size: "text-3xl",
  };
  return (
    <h1 className={`${classes.size} ${globalStyles.color}`}>{children}</h1>
  );
};
