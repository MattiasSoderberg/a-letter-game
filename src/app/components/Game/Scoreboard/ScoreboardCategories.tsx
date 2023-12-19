import React, { useEffect, useState } from "react";
import { GameSettings } from "@/gameConfig";
import Divider from "../../DrawerMenu/Divider";
import { AnimatePresence, motion } from "framer-motion";
import ButtonStandard from "../../Button/variants/ButtonStandard";

interface Props {
  categories: GameSettings["categories"];
  buttonTextNext: string;
  buttonTextClose: string;
  closeFunction: () => void;
}

const ScoreboardCategories = ({
  categories,
  buttonTextNext,
  buttonTextClose,
  closeFunction,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onClick = () => {
    if (currentIndex >= categories.length - 1) {
      closeFunction();
      const timer = setTimeout(() => {
        setCurrentIndex(0);
        clearTimeout(timer);
      }, 300);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const renderCategory = (text: string): React.JSX.Element => {
    const variants = {
      initial:
        currentIndex === 0
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
    setCurrentIndex(0);
  }, []);

  return (
    <div className="w-full flex flex-col gap-6">
      <Divider color="darkMain" />
      <div className="w-full">
        <AnimatePresence mode="popLayout">
          {renderCategory(categories[currentIndex].value)}
        </AnimatePresence>
      </div>
      <div className="w-full flex flex-col">
        <ButtonStandard onClick={onClick} size="sm">
          {currentIndex >= categories.length - 1
            ? buttonTextClose
            : buttonTextNext}
        </ButtonStandard>
      </div>
      <Divider color="darkMain" />
    </div>
  );
};

export default ScoreboardCategories;
