"use client";
import React from "react";
import { motion } from "framer-motion";
import ButtonNaked from "../Button/variants/ButtonNaked";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
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
      initial={{ x: "-97%" }}
      animate={isPlayerCardsDrawerOpen ? { x: -20 } : { x: "-97%" }}
      transition={{ type: "spring", stiffness: 130, damping: 20 }}
      className={`w-full h-full absolute top-0 z-50`}
    >
      <div className="w-full h-full flex items-start relative drop-shadow-lg">
        <div className="w-full h-full flex justify-center bg-lightMain">
          <div className="w-full h-fit flex flex-wrap justify-between gap-6 p-6">
            {players &&
              players.map((player, index) => (
                <PlayerCard
                  name={player.name}
                  points={player.points}
                  index={index}
                />
              ))}
          </div>
        </div>
        <ButtonNaked
          background="lightMain"
          paddings="px-1 py-6"
          borderRadius="rounded-r-lg"
          classNames="border-l-0"
          onClick={
            isPlayerCardsDrawerOpen
              ? closePlayerCardDrawer
              : openPlayerCardDrawer
          }
        >
          {isPlayerCardsDrawerOpen ? <MdArrowBackIos /> : <MdArrowForwardIos />}
        </ButtonNaked>
      </div>
    </motion.div>
  );
};

export default PlayerCardDrawer;
