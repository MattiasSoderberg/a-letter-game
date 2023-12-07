import React from "react";
import { Link } from "@/navigation";
import { pathnames } from "@/navigation";

type Pathnames = keyof typeof pathnames;

interface Props {
  href: Pathnames;
  as?: string;
  children: React.ReactNode;
  color?: string;
  outlineColor?: string;
  onClick?: () => void;
}

const LinkStyled = ({
  href,
  children,
  color = "darkMain",
  outlineColor = "firstMain",
  onClick,
}: Props) => {
  return (
    <Link
      href={href}
      className={`rounded text-${color} focus:outline focus:outline-${outlineColor}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default LinkStyled;
