"use client";
import React, { useEffect, useState } from "react";
import NumPlayers from "./NumPlayers";
import PlayersForm from "./PlayersForm";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "@/navigation";

interface Props {}

export type Player = {
  name: string;
  points: number;
};

const NewGameForm = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(0);
  const { players, handleSetPlayers } = useAppContext();
  const router = useRouter();

  const handleSetNumPlayers = (numPlayers: number) => {
    setNumberOfPlayers(numPlayers);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/game");
  };

  useEffect(() => {
    if (numberOfPlayers > 0) {
      const players = [];
      for (let i = 0; i < numberOfPlayers; i++) {
        players.push({ name: "", points: 0 });
      }
      handleSetPlayers(players);
    }
  }, [numberOfPlayers]);

  return (
    <>
      {numberOfPlayers > 0 ? (
        <PlayersForm
          players={players}
          handleSetPlayers={handleSetPlayers}
          onSubmit={onSubmit}
        />
      ) : (
        <NumPlayers onSubmit={handleSetNumPlayers} />
      )}
    </>
  );
};

export default NewGameForm;
