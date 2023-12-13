import { useTranslations } from "next-intl";
import React from "react";
import BackgroundLetter from "./BackgroundLetter";

interface Props {
  children: React.ReactNode;
}

const Background = () => {
  const t = useTranslations("Utils");
  const letters = t("alphabet").split(",");
  const positions = [
    { top: "top-[7%]", left: "left-[2%]", color: "secondMain" },
    { top: "top-[10%]", left: "left-[75%]" },
    { top: "top-[12%]", left: "left-[21%]" },
    { top: "top-[16%]", left: "left-[54%]", color: "thirdMain" },
    { top: "top-[20%]", left: "left-[34%]", color: "secondLight" },
    { top: "top-[21%]", left: "left-[89%]", color: "secondLight" },
    { top: "top-[24%]", left: "left-[8%]" },
    { top: "top-[27%]", left: "left-[71%]" },
    { top: "top-[31%]", left: "left-[47%]" },
    { top: "top-[34%]", left: "left-[11%]", color: "secondLight" },
    { top: "top-[37%]", left: "left-[80%]", color: "secondMain" },
    { top: "top-[40%]", left: "left-[26%]" },
    { top: "top-[44%]", left: "left-[57%]", color: "secondLight" },
    { top: "top-[46%]", left: "left-[4%]", color: "thirdMain" },
    { top: "top-[50%]", left: "left-[94%]" },
    { top: "top-[52%]", left: "left-[36%]" },
    { top: "top-[56%]", left: "left-[70%]" },
    { top: "top-[59%]", left: "left-[14%]", color: "secondLight" },
    { top: "top-[62%]", left: "left-[52%]" },
    { top: "top-[67%]", left: "left-[85%]", color: "secondLight" },
    { top: "top-[70%]", left: "left-[0%]" },
    { top: "top-[73%]", left: "left-[33%]", color: "secondMain" },
    { top: "top-[76%]", left: "left-[66%]", color: "thirdMain" },
    { top: "top-[79%]", left: "left-[12%]", color: "secondLight" },
    { top: "top-[82%]", left: "left-[48%]" },
    { top: "top-[87%]", left: "left-[91%]" },
    { top: "top-[90%]", left: "left-[19%]", color: "thirdMain" },
    { top: "top-[93%]", left: "left-[69%]", color: "secondMain" },
    { top: "top-[96%]", left: "left-[38%]" },
  ];

  return (
    <div className="w-full h-full bg-lightMain absolute top-0 left-0 z-0">
      {letters.map((letter) => {
        const position =
          positions[Math.floor(Math.random() * positions.length)];
        positions.splice(positions.indexOf(position), 1);
        const { top, left, color } = position;
        return (
          <BackgroundLetter
            key={letter}
            position={`${top} ${left}`}
            color={color ? color : "firstLight"}
          >
            {letter}
          </BackgroundLetter>
        );
      })}
      <div className="w-full h-full absolute top-0 left-0 z-20 bg-[#FFFFFF40] backdrop-blur-[3px]" />
    </div>
  );
};

export default Background;
