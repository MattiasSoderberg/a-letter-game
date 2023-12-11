import React from "react";

type Size = "lg" | "regular" | "sm" | "xs";

interface Props {
  children: React.ReactNode;
  color?: string;
  size?: Size;
}

const globalStyles = {
  color: "darkMain",
};

export const H1 = ({
  children,
  color = globalStyles.color,
  size = "regular",
}: Props) => {
  const sizes = {
    lg: "text-4xl",
    regular: "text-3xl",
    sm: "text-2xl",
    xs: "text-xl",
  };
  return <h1 className={`${sizes[size]} text-${color}`}>{children}</h1>;
};

export const H2 = ({
  children,
  color = globalStyles.color,
  size = "regular",
}: Props) => {
  const sizes = {
    lg: "text-2xl",
    regular: "text-xl",
    sm: "text-lg",
    xs: "text-base",
  };
  return <h2 className={`${sizes[size]} text-${color}`}>{children}</h2>;
};

export const TextLarge = ({
  children,
  color = globalStyles.color,
  size = "regular",
}: Props) => {
  const sizes = {
    lg: "text-xl",
    regular: "text-lg",
    sm: "text-base",
    xs: "text-sm",
  };
  return <p className={`${sizes[size]} text-${color}`}>{children}</p>;
};

export const TextRegular = ({
  children,
  color = globalStyles.color,
  size = "regular",
}: Props) => {
  const sizes = {
    lg: "text-lg",
    regular: "text-base",
    sm: "text-sm",
    xs: "text-xs",
  };
  return <p className={`${sizes[size]} text-${color}`}>{children}</p>;
};

export const TextSmall = ({
  children,
  color = globalStyles.color,
  size = "regular",
}: Props) => {
  const sizes = {
    lg: "text-base",
    regular: "text-sm",
    sm: "text-xs",
    xs: "text-[10px]",
  };
  return <p className={`${sizes[size]} text-${color}`}>{children}</p>;
};
