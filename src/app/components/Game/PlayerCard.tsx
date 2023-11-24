"use client";
import React, { useEffect, useState } from "react";
import { TextSmall } from "../Typography";
import ButtonStandard from "../Button/variants/ButtonStandard";
import { useAppContext } from "@/context/AppContext";

interface Props {
  name: string;
  points: number;
  index: number;
}

const PlayerCard = ({ name, points, index }: Props) => {
  const [playerScore, setPlayerScore] = useState<number>();
  const { players, handleSetPlayers } = useAppContext();

  const onClick = (point: number) => {
    const data = [...players];
    data[index]["points"] += point;
    handleSetPlayers(players);
    console.log(players);
  };

  useEffect(() => {
    setPlayerScore(points);
  }, [points]);

  return (
    <div className="w-max h-max flex flex-col gap-2 p-4 bg-textContainerBG rounded shadow-md">
      <div className="w-full flex justify-between">
        <TextSmall>{name}</TextSmall>
        <TextSmall>{playerScore}</TextSmall>
      </div>
      <div className="flex gap-2">
        <ButtonStandard
          onClick={() => onClick(0)}
          size="xs"
          paddings="px-2 py-1"
        >
          0
        </ButtonStandard>
        <ButtonStandard
          onClick={() => onClick(1)}
          size="xs"
          paddings="px-2 py-1"
        >
          1
        </ButtonStandard>
        <ButtonStandard
          onClick={() => onClick(2)}
          size="xs"
          paddings="px-2 py-1"
        >
          2
        </ButtonStandard>
      </div>
    </div>
  );
};

export default PlayerCard;
