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

export const H2 = ({ children }: Props) => {
  const classes = {
    size: "text-xl",
  };
  return (
    <h2 className={`${classes.size} ${globalStyles.color}`}>{children}</h2>
  );
};

export const TextLarge = ({ children }: Props) => {
  const classes = {
    size: "text-lg",
  };
  return <p className={`${classes.size} ${globalStyles.color}`}>{children}</p>;
};

export const TextRegular = ({ children }: Props) => {
  const classes = {
    size: "text-base",
  };
  return <p className={`${classes.size} ${globalStyles.color}`}>{children}</p>;
};

export const TextSmall = ({ children }: Props) => {
  const classes = {
    size: "text-sm",
  };
  return <p className={`${classes.size} ${globalStyles.color}`}>{children}</p>;
};
