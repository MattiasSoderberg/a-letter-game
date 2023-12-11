"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ButtonNaked from "../Button/variants/ButtonNaked";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdOutlineScoreboard,
} from "react-icons/md";
import usePlayerCardsDrawer from "@/hooks/usePlayerCardsDrawer";
import { Player, useAppContext } from "@/context/AppContext";
import PlayerCard from "./PlayerCard";
import { GameSettings } from "@/gameConfig";
import { H2, TextLarge } from "../Typography";
import ButtonStandard from "../Button/variants/ButtonStandard";
import { useTranslations } from "next-intl";

interface Props {
  players: Player[];
  currentLetter: string;
  categories: GameSettings["categories"];
}

const PlayerCardDrawer = ({ players, currentLetter, categories }: Props) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const { openPlayerCardDrawer, closePlayerCardDrawer } =
    usePlayerCardsDrawer();
  const { isPlayerCardsDrawerOpen } = useAppContext();
  const t = useTranslations("Game");

  const onClick = () => {
    if (currentCategoryIndex >= categories.length - 1) {
      closePlayerCardDrawer();
      setCurrentCategoryIndex(0);
    } else {
      setCurrentCategoryIndex((prev) => prev + 1);
    }
  };

  return (
    <motion.div
      initial={{ x: "-358px" }}
      animate={isPlayerCardsDrawerOpen ? { x: 0 } : { x: "-358px" }}
      transition={{ type: "spring", stiffness: 130, damping: 20 }}
      className={`w-full h-full absolute top-0 left-0 z-50`}
    >
      <div className="w-fit h-full flex items-start relative container-drop-shadow">
        <div className="w-[358px] h-full flex flex-col gap-6 p-5 bg-lightMain">
          {currentLetter !== "?" && (
            <div className="w-full flex flex-col items-center gap-6">
              <p className="text-3xl text-darkMain">{currentLetter}</p>
              <motion.p>{categories[currentCategoryIndex].value}</motion.p>
            </div>
          )}
          <div className="w-full h-fit flex flex-wrap justify-between gap-x-6 gap-y-10">
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
          <div className="w-full flex flex-col">
            <ButtonStandard onClick={onClick}>
              {currentCategoryIndex >= categories.length - 1
                ? t("player_drawer_button_close")
                : t("player_drawer_button_next")}
            </ButtonStandard>
          </div>
        </div>
        <div className="w-[30px] min-w-fit flex pt-5">
          <ButtonNaked
            background="lightMain"
            paddings="px-1 py-4"
            borderRadius="rounded-r-lg"
            classNames="border-l-0"
            onClick={
              isPlayerCardsDrawerOpen
                ? closePlayerCardDrawer
                : openPlayerCardDrawer
            }
          >
            <div className="flex flex-col gap-2">
              {isPlayerCardsDrawerOpen ? (
                <MdArrowBackIos />
              ) : (
                <MdArrowForwardIos />
              )}
              <MdOutlineScoreboard />
            </div>
          </ButtonNaked>
        </div>
      </div>
    </motion.div>
  );
};

export default PlayerCardDrawer;
