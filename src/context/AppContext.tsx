"use client";
import { GameSettings, gameSettingsConfig } from "@/gameConfig";
import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export type Player = {
  name: string;
  points: number;
};

interface AppContextType {
  handleOnMenuOpen: () => void;
  handleOnMenuClose: () => void;
  isMenuOpen: boolean;
  isPlayerCardsDrawerOpen: boolean;
  handleOnPlayerCardsDrawerOpen: () => void;
  handleOnPlayerCardsDrawerClose: () => void;
  isScoreboardOpen: boolean;
  handleOnScoreboardOpen: () => void;
  handleOnScoreboardClose: () => void;
  players: Player[];
  handleSetPlayers: (players: Player[]) => void;
  gameSettings: GameSettings;
  handleSetGameSettings: (settings: GameSettings) => void;
  resetPlayerScore: () => void;
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
  const [isScoreboardOpen, setIsScoreboardOpen] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);
  const [gameSettings, setGameSettings] =
    useState<GameSettings>(gameSettingsConfig);

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

  const handleOnScoreboardOpen = () => {
    setIsScoreboardOpen(true);
  };

  const handleOnScoreboardClose = () => {
    setIsScoreboardOpen(false);
  };

  const handleSetPlayers = (players: Player[]) => {
    setPlayers(players);
  };

  const handleSetGameSettings = (settings: GameSettings) => {
    setGameSettings(settings);
  };

  const resetPlayerScore = () => {
    setPlayers([
      ...players.map((player) => ({ name: player.name, points: 0 })),
    ]);
  };

  const value = {
    isMenuOpen,
    handleOnMenuOpen,
    handleOnMenuClose,
    isPlayerCardsDrawerOpen,
    handleOnPlayerCardsDrawerOpen,
    handleOnPlayerCardsDrawerClose,
    isScoreboardOpen,
    handleOnScoreboardOpen,
    handleOnScoreboardClose,
    handleSetPlayers,
    players,
    handleSetGameSettings,
    gameSettings,
    resetPlayerScore,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
