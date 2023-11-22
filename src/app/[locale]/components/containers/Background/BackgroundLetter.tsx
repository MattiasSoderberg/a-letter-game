"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  color?: string;
  position: string;
}

const BackgroundLetter = ({
  children,
  color = "firstLight",
  position,
}: Props) => {
  const delay = Math.floor(Math.random() * 30) / 10;
  const degreesOne = Math.floor(Math.random() * 15 + 5);
  const degreesTwo = Math.floor(Math.random() * 15 + 5);
  const rotation =
    Math.floor(Math.random() * 2 + 1) % 2 === 0
      ? [0, degreesOne, -degreesTwo, 0]
      : [0, -degreesOne, degreesTwo, 0];

  return (
    <motion.p
      animate={{
        opacity: [0.6, 1, 1, 0.6],
        scale: [0.8, 1.2, 1.2, 0.8],
        rotate: rotation,
      }}
      transition={{
        delay: delay,
        repeat: Infinity,
        repeatDelay: 1 + delay,
        duration: 3 + delay,
        ease: "easeInOut",
        times: [null, 0.4, 0.6, 1],
      }}
      className={`text-4xl text-${color} absolute ${position} md:text-5xl`}
    >
      {children}
    </motion.p>
  );
};

export default BackgroundLetter;
