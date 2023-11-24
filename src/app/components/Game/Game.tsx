"use client";
import React, { useEffect } from "react";
import { useAppContext } from "@/context/AppContext";
import { TextRegular } from "../Typography";
import { useRouter } from "@/navigation";
import PlayerCard from "./PlayerCard";
import LetterGenerator from "./LetterGenerator";
import { useTranslations } from "next-intl";

const Game = () => {
  const { players } = useAppContext();
  const router = useRouter();
  const t = useTranslations("Utils");

  useEffect(() => {
    if (players.length <= 0) {
      router.push("/game/new-game");
    }
  }, []);

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
      <LetterGenerator alphabeth={t("alphabeth")} />
    </div>
  );
};

export default Game;
