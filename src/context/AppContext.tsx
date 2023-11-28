"use client";
import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export type Player = {
  name: string;
  points: number;
};

type GameSettings = {
  numberOfPlayers: number;
  repeatingLetters: boolean;
  numberOfRounds: number;
  lengthOfRounds: number;
};

interface AppContextType {
  handleOnMenuOpen: () => void;
  handleOnMenuClose: () => void;
  isMenuOpen: boolean;
  isPlayerCardsDrawerOpen: boolean;
  handleOnPlayerCardsDrawerOpen: () => void;
  handleOnPlayerCardsDrawerClose: () => void;
  players: Player[];
  handleSetPlayers: (players: Player[]) => void;
  gameSettings: GameSettings;
  handleSetGameSettings: (settings: GameSettings) => void;
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
  const [isPlayerCardsDrawerOpen, setIsPlayerCardsOpen] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);
  const [gameSettings, setGameSettings] = useState<GameSettings>({
    numberOfPlayers: 0,
    repeatingLetters: true,
    numberOfRounds: 10,
    lengthOfRounds: 30,
  });

  const handleOnMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleOnMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleOnPlayerCardsDrawerOpen = () => {
    setIsPlayerCardsOpen(true);
  };

  const handleOnPlayerCardsDrawerClose = () => {
    setIsPlayerCardsOpen(false);
  };

  const handleSetPlayers = (players: Player[]) => {
    setPlayers(players);
  };

  const handleSetGameSettings = (settings: GameSettings) => {
    setGameSettings(settings);
  };

  const value = {
    isMenuOpen,
    handleOnMenuOpen,
    handleOnMenuClose,
    isPlayerCardsDrawerOpen,
    handleOnPlayerCardsDrawerOpen,
    handleOnPlayerCardsDrawerClose,
    handleSetPlayers,
    players,
    handleSetGameSettings,
    gameSettings,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
