"use client";
import React from "react";
import Logo from "./SVG/Logo";
import ButtonMenu from "./Button/variants/ButtonMenu";
import { Link } from "@/navigation";
import useMenu from "@/hooks/useMenu";

const Navbar = () => {
  const { closeMenu } = useMenu();
  return (
    <div className="w-full h-navHeight flex justify-between bg-lightMain relative z-30 p-5 md:px-10">
      <Link href="/" onClick={closeMenu}>
        <Logo />
      </Link>
      <ButtonMenu />
    </div>
  );
};

export default Navbar;
