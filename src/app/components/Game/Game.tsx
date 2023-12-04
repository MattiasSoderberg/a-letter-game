"use client";
import React, { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { TextLarge, TextRegular } from "../Typography";
import { useRouter } from "@/navigation";
import PlayerCard from "./PlayerCard";
import LetterGenerator from "./LetterGenerator";
import { useTranslations } from "next-intl";
import GameTimer from "./GameTimer";
import PlayerCardDrawer from "./PlayerCardDrawer";
import Categories from "./Categories";

const Game = () => {
  const [currentLetter, setCurrentLetter] = useState("?");
  const [isRoundActive, setIsRoundActive] = useState(false);
  const { players, gameSettings } = useAppContext();
  const router = useRouter();
  const t = useTranslations("Utils");

  const handleSetCurrentLetter = (letter: string) => {
    setCurrentLetter(letter);
    if (letter !== "?" && letter !== "") {
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

  return (
    <div className="w-full h-full flex flex-col gap-8 px-4">
      {players.length > 0 ? (
        <>
          <PlayerCardDrawer players={players} />
          <Categories categories={gameSettings.categories} />
          <GameTimer
            isRoundActive={isRoundActive}
            handleSetRoundIsActive={handleSetRoundIsActive}
          />
          <LetterGenerator
            alphabeth={t("alphabeth")}
            currentLetter={currentLetter}
            handleSetCurrentLetter={handleSetCurrentLetter}
          />
        </>
      ) : (
        <TextLarge>Inget aktivt spel</TextLarge>
      )}
    </div>
  );
};

export default Game;
