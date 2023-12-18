"use client";
import React from "react";
import { motion } from "framer-motion";
import { Player, useAppContext } from "@/context/AppContext";
import { useTranslations } from "next-intl";
import ButtonNaked from "../../Button/variants/ButtonNaked";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdOutlineScoreboard,
} from "react-icons/md";
import useScoreboard from "@/hooks/useScoreboard";
import { GameSettings } from "@/gameConfig";
import { H1 } from "../../Typography";
import ScoreboardCategories from "./ScoreboardCategories";
import PlayerCardContainer from "./PlayerCardContainer";

interface Props {
  players: Player[];
  currentLetter: string;
  categories: GameSettings["categories"];
}

const Scoreboard = ({ players, currentLetter, categories }: Props) => {
  const { isScoreboardOpen } = useAppContext();
  const { openScoreboard, closeScoreboard } = useScoreboard();
  const t = useTranslations("Game.scoreboard");

  return (
    <motion.div
      initial={{ x: "-92%" }}
      animate={isScoreboardOpen ? { x: 0 } : { x: "-92%" }}
      transition={{ type: "spring", stiffness: 130, damping: 20 }}
      className={`w-full h-full absolute top-0 -left-1 z-50 overflow-hidden`}
    >
      <div className="w-full h-full flex items-start relative container-drop-shadow">
        <div className="w-full h-full flex flex-col gap-6 bg-lightMain">
          <div className="w-full flex flex-col gap-6 p-5">
            <div className="w-full flex justify-between">
              <H1>{t("scoreboard_title")}</H1>
              {currentLetter !== "?" && (
                <div className="w-1/5 flex justify-center p-2 rounded-lg border-2 border-firstLight">
                  <p className="text-2xl text-darkMain">{currentLetter}</p>
                </div>
              )}
            </div>
            {currentLetter !== "?" && (
              <ScoreboardCategories
                categories={categories}
                buttonTextClose={t("scoreboard_categories_button_close")}
                buttonTextNext={t("scoreboard_categories_button_next")}
                closeFunction={closeScoreboard}
              />
            )}
          </div>
          <PlayerCardContainer players={players} />
        </div>
        <div className="w-[30px] min-w-fit flex pt-5">
          <ButtonNaked
            background="lightMain"
            paddings="px-1 py-4"
            borderRadius="rounded-r-lg"
            classNames="border-l-0"
            onClick={isScoreboardOpen ? closeScoreboard : openScoreboard}
          >
            <div className="flex flex-col gap-2">
              {isScoreboardOpen ? <MdArrowBackIos /> : <MdArrowForwardIos />}
              <MdOutlineScoreboard />
            </div>
          </ButtonNaked>
        </div>
      </div>
    </motion.div>
  );
};

export default Scoreboard;
