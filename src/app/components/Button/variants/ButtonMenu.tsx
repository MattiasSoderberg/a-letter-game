"use client";
import React from "react";
import { motion } from "framer-motion";
import ButtonNaked from "./ButtonNaked";
import useMenu from "@/hooks/useMenu";
import { useAppContext } from "@/context/AppContext";

interface Props {
  onClick?: () => void;
}

const ButtonMenu = ({ ...rest }: Props) => {
  const { openMenu, closeMenu } = useMenu();
  const { isMenuOpen } = useAppContext();

  const opacityVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.1 },
    },
  };
  const rotationVariants = {
    initial: {
      translateY: 0,
      rotate: 0,
    },
    clockwise: {
      translateY: 7,
      rotate: 45,
    },
    counterClockwise: {
      translateY: -7,
      rotate: -45,
    },
  };
  const transition = { type: "spring", stiffness: 140, damping: 19 };
  return (
    <ButtonNaked onClick={isMenuOpen ? closeMenu : openMenu}>
      <div className="w-[30px] flex flex-col justify-between gap-1">
        <motion.div
          variants={rotationVariants}
          initial="initial"
          animate={isMenuOpen ? "clockwise" : "initial"}
          transition={transition}
          className="w-full h-[3px] bg-darkMain rounded"
        />
        <motion.div
          key="bar2"
          variants={opacityVariants}
          initial="visible"
          exit="hidden"
          animate={isMenuOpen ? "hidden" : "visible"}
          className="w-full h-[3px] bg-darkMain rounded"
        />
        <motion.div
          variants={rotationVariants}
          initial="initial"
          animate={isMenuOpen ? "counterClockwise" : "initial"}
          transition={transition}
          className="w-full h-[3px] bg-darkMain rounded"
        />
      </div>
    </ButtonNaked>
  );
};

export default ButtonMenu;
