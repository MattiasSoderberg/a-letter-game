import React from "react";
import Logo from "./SVG/Logo";
import ButtonMenu from "./Button/variants/ButtonMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-navHeight flex justify-between bg-lightMain relative z-30 p-5 md:px-10">
      <Link href="/">
        <Logo />
      </Link>
      <ButtonMenu />
    </div>
  );
};

export default Navbar;
