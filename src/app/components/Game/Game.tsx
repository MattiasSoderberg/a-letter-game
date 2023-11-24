"use client";
import React, { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { TextRegular } from "../Typography";
import { useRouter } from "@/navigation";
import PlayerCard from "./PlayerCard";
import LetterGenerator from "./LetterGenerator";
import { useTranslations } from "next-intl";
import GameTimer from "./GameTimer";

const Game = () => {
  const [currentLetter, setCurrentLetter] = useState("?");
  const [isRoundActive, setIsRoundActive] = useState(false);
  const { players } = useAppContext();
  const router = useRouter();
  const t = useTranslations("Utils");

  const handleSetCurrentLetter = (letter: string) => {
    setCurrentLetter(letter);
    if (letter !== "?") {
      setIsRoundActive(true);
    }
  };

  const handleSetRoundIsActive = (active: boolean) => {
    setIsRoundActive(active);
  };

  useEffect(() => {
    if (players.length <= 0) {
      router.push("/game/new-game");
    }
  }, []);

  console.log(currentLetter, isRoundActive);

  return (
    <div className="w-full h-full flex flex-col gap-10">
      <div className="flex gap-4">
        {players.map((player, index) => (
          <PlayerCard
            key={player.name + index}
            name={player.name}
            points={player.points}
            index={index}
          />
        ))}
      </div>
      <GameTimer
        isRoundActive={isRoundActive}
        handleSetRoundIsActive={handleSetRoundIsActive}
      />
      <LetterGenerator
        alphabeth={t("alphabeth")}
        currentLetter={currentLetter}
        handleSetCurrentLetter={handleSetCurrentLetter}
      />
    </div>
  );
};

export default Game;
