import React from "react";
import { useAppContext } from "@/context/AppContext";

const useMenu = () => {
  const { handleOnMenuOpen, handleOnMenuClose } = useAppContext();

  const openMenu = () => {
    handleOnMenuOpen();
  };

  const closeMenu = () => {
    handleOnMenuClose();
  };

  return { openMenu, closeMenu };
};

export default useMenu;
