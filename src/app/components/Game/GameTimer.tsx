"use client";
import React, { useEffect, useState } from "react";
import TextContainer from "../containers/TextContainer";

interface Props {
  gameTimeLeft: number;
  lengthOfRounds: number;
}

const GameTimer = ({ gameTimeLeft, lengthOfRounds }: Props) => {
  const [bgColor, setBgColor] = useState("transparent");
  const [shadowColor, setShadowColor] = useState("lightDark");

  const renderTime = (time: number) => {
    if (time < 60) {
      return `00:${time.toString().padStart(2, "0")}`;
    }

    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (gameTimeLeft < Math.ceil(lengthOfRounds * 0.2)) {
      setBgColor("danger");
      setShadowColor("danger");
      const timer = setTimeout(() => {
        setBgColor("transparent");
        setShadowColor("transparent");
        clearTimeout(timer);
      }, Math.ceil(lengthOfRounds * 0.2 * 1000) + 3000);
    }
  }, [gameTimeLeft]);

  return (
    <TextContainer shadowColor={shadowColor} padding={false}>
      <div
        className={`w-full flex justify-center bg-${bgColor} p-4 rounded transition-colors duration-300 ease-in-out`}
      >
        <p className="text-2xl">{renderTime(gameTimeLeft)}</p>
      </div>
    </TextContainer>
  );
};

export default GameTimer;
