"use client";
import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type Player = {
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
  handleOnOpen: () => void;
  handleOnClose: () => void;
  isMenuOpen: boolean;
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
  const [players, setPlayers] = useState<Player[]>([]);
  const [gameSettings, setGameSettings] = useState<GameSettings>({
    numberOfPlayers: 0,
    repeatingLetters: true,
    numberOfRounds: 10,
    lengthOfRounds: 30,
  });

  const handleOnOpen = () => {
    setIsMenuOpen(true);
  };

  const handleOnClose = () => {
    setIsMenuOpen(false);
  };

  const handleSetPlayers = (players: Player[]) => {
    setPlayers(players);
  };

  const handleSetGameSettings = (settings: GameSettings) => {
    setGameSettings(settings);
  };

  const value = {
    isMenuOpen,
    handleOnOpen,
    handleOnClose,
    handleSetPlayers,
    players,
    handleSetGameSettings,
    gameSettings,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
