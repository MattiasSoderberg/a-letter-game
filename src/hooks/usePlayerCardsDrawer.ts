import { useAppContext } from "@/context/AppContext";
import React from "react";

const usePlayerCardsDrawer = () => {
  const { handleOnPlayerCardsDrawerOpen, handleOnPlayerCardsDrawerClose } =
    useAppContext();

  const openPlayerCardDrawer = () => {
    handleOnPlayerCardsDrawerOpen();
  };

  const closePlayerCardDrawer = () => {
    handleOnPlayerCardsDrawerClose();
  };

  return { openPlayerCardDrawer, closePlayerCardDrawer };
};

export default usePlayerCardsDrawer;
