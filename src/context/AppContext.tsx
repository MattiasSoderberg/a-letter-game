"use client";
import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type Player = {
  name: string;
  points: number;
};

interface AppContextType {
  handleOnOpen: () => void;
  handleOnClose: () => void;
  isMenuOpen: boolean;
  players: Player[];
  handleSetPlayers: (players: Player[]) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("useAppContext has to be used in <AppContext.Provider>");
  }

  return appContext;
};

export const AppContextProvider = ({ children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);

  const handleOnOpen = () => {
    setIsMenuOpen(true);
  };

  const handleOnClose = () => {
    setIsMenuOpen(false);
  };

  const handleSetPlayers = (players: Player[]) => {
    setPlayers(players);
  };

  const value = {
    isMenuOpen,
    handleOnOpen,
    handleOnClose,
    handleSetPlayers,
    players,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
