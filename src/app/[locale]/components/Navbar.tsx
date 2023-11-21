import React from "react";
import Logo from "./SVG/Logo";
import Menu from "./SVG/Menu";

const Navbar = () => {
  return (
    <div className="w-full h-navHeight flex justify-between bg-lightMain relative z-30 p-5 md:px-10">
      <div>
        <Logo />
      </div>
      <Menu />
    </div>
  );
};

export default Navbar;
