import React from "react";
import { Link } from "@/navigation";
import { pathnames } from "@/navigation";

type Pathnames = keyof typeof pathnames;

interface Props {
  href: Pathnames;
  as?: string;
  children: React.ReactNode;
  color?: string;
}

const LinkStyled = ({ href, as, children, color = "firstLight" }: Props) => {
  return <Link href={href}>{children}</Link>;
};

export default LinkStyled;
