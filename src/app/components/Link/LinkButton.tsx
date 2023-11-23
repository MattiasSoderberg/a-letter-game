import { Link } from "@/navigation";
import React from "react";
import { pathnames } from "@/navigation";

interface Props {
  children: React.ReactNode;
  href: keyof typeof pathnames;
  color?: string;
  background?: string;
  paddings?: string;
  borderRadius?: string;
  hovers?: string;
  transition?: string;
  size?: "lg" | "sm";
  onClick?: () => void;
}

const LinkButton = ({
  children,
  href,
  color = "darkMain",
  background = "firstLight",
  paddings = "px-10 py-5",
  borderRadius = "rounded-lg",
  hovers,
  transition = "transition-all duration-150 ease-in",
  size = "lg",
  onClick,
}: Props) => {
  const fonts = size === "lg" ? "text-lg" : "text-base";
  const bgColor = background.split(/(?=[A-Z])/)[0];
  const hoverClasses = hovers ? hovers : `hover:bg-${bgColor}Main`;
  const baseClasses = `${fonts} ${
    size === "lg" ? paddings : "px-7 py-3"
  } ${borderRadius} flex justify-center`;
  const activeClasses = `${baseClasses} bg-${background} text-${color} ${hoverClasses} ${transition}`;
  return (
    <Link href={href} className={activeClasses}>
      {children}
    </Link>
  );
};

export default LinkButton;
