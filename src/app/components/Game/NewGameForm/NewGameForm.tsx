"use client";
import React, { useEffect, useState } from "react";
import PlayersForm from "./PlayersForm";
import { GameSettings, useAppContext } from "@/context/AppContext";
import { useRouter } from "@/navigation";
import SettingsForm from "./SettingsForm";

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
        <SettingsForm
          gameSettings={gameSettings}
          onSettingsFormSubmit={onSettingsFormSubmit}
        />
      )}
    </>
  );
};

export default NewGameForm;
