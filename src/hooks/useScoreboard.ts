import React from "react";
import { useAppContext } from "@/context/AppContext";

const useScoreboard = () => {
  const { handleOnScoreboardOpen, handleOnScoreboardClose } = useAppContext();

  const openScoreboard = () => {
    handleOnScoreboardOpen();
  };

  const closeScoreboard = () => {
    handleOnScoreboardClose();
  };

  return { openScoreboard, closeScoreboard };
};

export default useScoreboard;
