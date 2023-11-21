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
  const delay = Math.random() * 3;

  return (
    <motion.p
      animate={{
        opacity: [0.6, 1, 1, 0.6],
        scale: [0.8, 1.2, 1.2, 0.8],
      }}
      transition={{
        delay: delay,
        repeat: Infinity,
        repeatDelay: 2 + delay,
        duration: 4 + delay,
        ease: "easeInOut",
        times: [0, 0.4, 0.6, 1],
      }}
      className={`text-4xl text-${color} absolute ${position} md:text-5xl`}
    >
      {children}
    </motion.p>
  );
};

export default BackgroundLetter;
