"use client";
import React, { useEffect, useState } from "react";
import { TextSmall } from "../Typography";
import { useAppContext } from "@/context/AppContext";
import ButtonNaked from "../Button/variants/ButtonNaked";
import {
  MdExposureNeg1,
  MdExposurePlus1,
  MdExposurePlus2,
} from "react-icons/md";

interface Props {
  name: string;
  points: number;
  index: number;
}

const PlayerCard = ({ name, points, index }: Props) => {
  const [playerScore, setPlayerScore] = useState<number>(points);
  const { players, handleSetPlayers } = useAppContext();

  const onClick = (point: number) => {
    const data = [...players];
    data[index]["points"] += point;
    handleSetPlayers(data);
    setPlayerScore((prevScore) => prevScore + point);
  };

  return (
    <div className="w-max h-max flex flex-col gap-2 p-4 bg-textContainerBG rounded-lg container-shadow shadow-lightDark">
      <div className="w-full flex justify-between">
        <TextSmall>{name}</TextSmall>
        <TextSmall>{playerScore}</TextSmall>
      </div>
      <div className="flex gap-2">
        <ButtonNaked
          onClick={() => onClick(-1)}
          borders
          paddings="p-[6px]"
          borderRadius="rounded-lg"
        >
          <MdExposureNeg1 />
        </ButtonNaked>
        <ButtonNaked
          onClick={() => onClick(1)}
          borders
          paddings="p-[6px]"
          borderRadius="rounded-lg"
        >
          <MdExposurePlus1 />
        </ButtonNaked>
        <ButtonNaked
          onClick={() => onClick(2)}
          borders
          paddings="p-[6px]"
          borderRadius="rounded-lg"
        >
          <MdExposurePlus2 />
        </ButtonNaked>
      </div>
    </div>
  );
};

export default PlayerCard;
