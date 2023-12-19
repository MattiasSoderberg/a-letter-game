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
  isMenuOpen: boolean;
  handleOnMenuOpen: () => void;
  handleOnMenuClose: () => void;
  isScoreboardOpen: boolean;
  handleOnScoreboardOpen: () => void;
  handleOnScoreboardClose: () => void;
  players: Player[];
  handleSetPlayers: (players: Player[]) => void;
  gameSettings: GameSettings;
  handleSetGameSettings: (settings: GameSettings) => void;
  resetPlayerScore: () => void;
  resetPlayers: () => void;
  resetGame: () => void;
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

  const handleOnScoreboardOpen = () => {
    setIsScoreboardOpen(true);
  };

  const handleOnScoreboardClose = () => {
    setIsScoreboardOpen(false);
  };

  const handleSetPlayers = (players: Player[]) => {
    setPlayers(players);
  };

  const handleSetGameSettings = (settings: Partial<GameSettings>) => {
    setGameSettings((prev) => ({ ...prev, ...settings }));
  };

  const resetPlayerScore = () => {
    setPlayers([
      ...players.map((player) => ({ name: player.name, points: 0 })),
    ]);
  };

  const resetPlayers = () => {
    setPlayers([]);
  };

  const resetGame = () => {
    resetPlayers();
    setGameSettings(gameSettingsConfig);
  };

  const value = {
    isMenuOpen,
    handleOnMenuOpen,
    handleOnMenuClose,
    isScoreboardOpen,
    handleOnScoreboardOpen,
    handleOnScoreboardClose,
    handleSetPlayers,
    players,
    handleSetGameSettings,
    gameSettings,
    resetPlayerScore,
    resetPlayers,
    resetGame,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
