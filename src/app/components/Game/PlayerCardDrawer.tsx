"use client";
import React from "react";
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

interface Props {
  players: Player[];
}

const PlayerCardDrawer = ({ players }: Props) => {
  const { openPlayerCardDrawer, closePlayerCardDrawer } =
    usePlayerCardsDrawer();
  const { isPlayerCardsDrawerOpen } = useAppContext();

  return (
    <motion.div
      initial={{ x: "-358px" }}
      animate={isPlayerCardsDrawerOpen ? { x: 0 } : { x: "-358px" }}
      transition={{ type: "spring", stiffness: 130, damping: 20 }}
      className={`w-full h-full absolute top-0 left-0 z-50`}
    >
      <div className="w-fit h-full flex items-start relative container-drop-shadow">
        <div className="w-[358px] h-full flex p-5 bg-lightMain">
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
