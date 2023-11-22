"use client";
import React, { useState } from "react";
import Logo from "./SVG/Logo";
import ButtonNaked from "./Button/variants/ButtonNaked";
import ButtonMenu from "./Button/variants/ButtonMenu";

const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const onClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="w-full h-navHeight flex justify-between bg-lightMain relative z-30 p-5 md:px-10">
      <div>
        <Logo />
      </div>
      <ButtonMenu />
    </div>
  );
};

export default Navbar;
