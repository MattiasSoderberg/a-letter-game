"use client";
import React from "react";
import { motion } from "framer-motion";
import ButtonNaked from "./ButtonNaked";

interface Props {
  onClick?: () => void;
}

const ButtonMenu = ({ ...rest }: Props) => {
  const opacityVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
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
  const transition = {
    duration: 0.4,
    ease: "easeOut",
  };
  return (
    <ButtonNaked {...rest}>
      <div className="w-[30px] flex flex-col justify-between gap-1">
        <motion.div
          variants={rotationVariants}
          initial="initial"
          // animate={isActive ? "clockwise" : "initial"}
          transition={transition}
          className="w-full h-[3px] bg-darkMain rounded"
        />
        <motion.div
          key="bar2"
          variants={opacityVariants}
          initial="visible"
          exit="hidden"
          // animate={isActive ? "hidden" : "visible"}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="w-full h-[3px] bg-darkMain rounded"
        />
        <motion.div
          variants={rotationVariants}
          initial="initial"
          // animate={isActive ? "counterClockwise" : "initial"}
          transition={transition}
          className="w-full h-[3px] bg-darkMain rounded"
        />
      </div>
    </ButtonNaked>
  );
};

export default ButtonMenu;
