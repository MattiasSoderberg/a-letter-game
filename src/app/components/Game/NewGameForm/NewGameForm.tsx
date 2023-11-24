"use client";
import React, { useEffect, useState } from "react";
import NumPlayers from "./NumPlayers";
import PlayersForm from "./PlayersForm";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "@/navigation";

export type Player = {
  name: string;
  points: number;
};

export type GameSettings = {
  numberOfPlayers: number;
  repeatingLetters: boolean;
  numberOfRounds: number;
  lengthOfRounds: number;
};

const NewGameForm = () => {
  const { players, handleSetPlayers, gameSettings, handleSetGameSettings } =
    useAppContext();
  const router = useRouter();

  const onSettingsFormSubmit = (settings: GameSettings) => {
    handleSetGameSettings(settings);
  };

  const onPlayersFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/game");
  };

  useEffect(() => {
    if (gameSettings.numberOfPlayers > 0) {
      const players = [];
      for (let i = 0; i < gameSettings.numberOfPlayers; i++) {
        players.push({ name: "", points: 0 });
      }
      handleSetPlayers(players);
    }
  }, [gameSettings.numberOfPlayers]);

  return (
    <>
      {gameSettings.numberOfPlayers > 0 ? (
        <PlayersForm
          players={players}
          handleSetPlayers={handleSetPlayers}
          onSubmit={onPlayersFormSubmit}
        />
      ) : (
        <NumPlayers
          gameSettings={gameSettings}
          onSettingsFormSubmit={onSettingsFormSubmit}
        />
      )}
    </>
  );
};

export default NewGameForm;
