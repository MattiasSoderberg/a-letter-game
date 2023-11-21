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
        opacity: [0.6, 1, 0.6],
        scale: [0.9, 1.1, 0.9],
      }}
      transition={{
        delay: delay,
        repeat: Infinity,
        repeatDelay: 2 + delay,
        duration: 2 + delay,
        ease: "easeInOut",
      }}
      className={`text-4xl text-${color} absolute ${position}`}
    >
      {children}
    </motion.p>
  );
};

export default BackgroundLetter;
