"use client";
import React, { useState } from "react";
import PlayersForm from "./PlayersForm";
import { Player, useAppContext } from "@/context/AppContext";
import { useRouter } from "@/navigation";
import SettingsForm from "./SettingsForm";
import { GameSettings } from "@/gameConfig";

const NewGameForm = () => {
  const [isSettingsSubmitted, setIsSettingsSubmitted] = useState(false);
  const { handleSetPlayers, gameSettings, handleSetGameSettings } =
    useAppContext();
  const router = useRouter();

  const onSettingsFormSubmit = (settings: GameSettings) => {
    handleSetGameSettings(settings);
    setIsSettingsSubmitted(true);
  };

  const onPlayersFormSubmit = (players: Player[]) => {
    handleSetPlayers(players);
    router.push("/game");
  };

  return (
    <>
      {isSettingsSubmitted ? (
        <PlayersForm
          numberOfPlayers={gameSettings.numberOfPlayers}
          onPlayersFormSubmit={onPlayersFormSubmit}
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
