import React from "react";
import { useAppContext } from "@/context/AppContext";

const useMenu = () => {
  const { handleOnOpen, handleOnClose } = useAppContext();

  const openMenu = () => {
    handleOnOpen();
  };

  const closeMenu = () => {
    handleOnClose();
  };

  return { openMenu, closeMenu };
};

export default useMenu;
