"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import { H1 } from "../Typography";
import ButtonStandard from "../Button/variants/ButtonStandard";
import { useTranslations } from "next-intl";
import Divider from "../DrawerMenu/Divider";

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
  const t = useTranslations("Game.drawer");

  const onClick = () => {
    if (currentCategoryIndex >= categories.length - 1) {
      closePlayerCardDrawer();
    } else {
      setCurrentCategoryIndex((prev) => prev + 1);
    }
  };

  const renderCategory = (text: string) => {
    const variants = {
      initial:
        currentCategoryIndex === 0
          ? {
              x: 0,
              opacity: 0,
            }
          : {
              x: "50%",
              opacity: 0,
            },
      animate: {
        x: 0,
        opacity: 1,
      },
      exit: {
        x: "-50%",
        opacity: 0,
      },
    };

    return (
      <motion.p
        layout
        key={`drawer-category-${text}`}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: "180", damping: "19" },
          opacity: { duration: 0.2, ease: "easeIn" },
        }}
        className="w-full flex justify-center text-3xl text-darkMain"
      >
        {text}
      </motion.p>
    );
  };

  useEffect(() => {
    if (isPlayerCardsDrawerOpen) {
      setCurrentCategoryIndex(0);
    }
  }, [isPlayerCardsDrawerOpen]);

  return (
    <motion.div
      initial={{ x: "-92%" }}
      animate={isPlayerCardsDrawerOpen ? { x: 0 } : { x: "-92%" }}
      transition={{ type: "spring", stiffness: 130, damping: 20 }}
      className={`w-full h-full absolute top-0 -left-1 z-50 overflow-hidden`}
    >
      <div className="w-full h-full flex items-start relative container-drop-shadow">
        <div className="w-full h-full flex flex-col gap-6 bg-lightMain">
          <div className="w-full flex flex-col gap-6 p-5">
            <div className="w-full flex justify-between">
              <H1>{t("player_drawer_title")}</H1>
              {currentLetter !== "?" && (
                <div className="w-1/5 flex justify-center p-2 rounded-lg border-2 border-firstLight">
                  <p className="text-2xl text-darkMain">{currentLetter}</p>
                </div>
              )}
            </div>
            {currentLetter !== "?" && (
              <div className="w-full flex flex-col gap-6">
                <Divider color="darkMain" />
                <div className="w-full">
                  <AnimatePresence mode="popLayout">
                    {renderCategory(categories[currentCategoryIndex].value)}
                  </AnimatePresence>
                </div>
                <div className="w-full flex flex-col">
                  <ButtonStandard onClick={onClick} size="sm">
                    {currentCategoryIndex >= categories.length - 1
                      ? t("player_drawer_button_close")
                      : t("player_drawer_button_next")}
                  </ButtonStandard>
                </div>
                <Divider color="darkMain" />
              </div>
            )}
          </div>
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
