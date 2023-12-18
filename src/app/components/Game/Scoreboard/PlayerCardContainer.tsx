import { Player } from "@/context/AppContext";
import React from "react";
import PlayerCard from "../PlayerCard";

interface Props {
  players: Player[];
}

const PlayerCardContainer = ({ players }: Props) => {
  return (
    <div className="w-full h-fit flex flex-wrap justify-between gap-x-4 gap-y-10 px-5 pt-4 pb-[104px] overflow-y-auto">
      {players &&
        players.map((player, index) => (
          <PlayerCard
            key={player.name + index}
            name={player.name}
            points={player.points}
            index={index}
          />
        ))}
    </div>
  );
};

export default PlayerCardContainer;
