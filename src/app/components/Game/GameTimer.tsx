"use client";
import React, { useEffect, useState } from "react";
import TextContainer from "../containers/TextContainer";

interface Props {
  gameTimeLeft: number;
  lengthOfRounds: number;
  timeIsRunningOut: boolean;
  isRoundActive: boolean;
}

const GameTimer = ({
  gameTimeLeft,
  lengthOfRounds,
  timeIsRunningOut,
  isRoundActive,
}: Props) => {
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
    if (isRoundActive) {
      setBgColor("lightMain");
      setShadowColor("firstLight");
    } else {
      setBgColor("danger");
      setShadowColor("danger");
    }
  }, [isRoundActive]);

  useEffect(() => {
    if (timeIsRunningOut) {
      setBgColor("thirdMain");
      setShadowColor("thirdMain");
    }
  }, [timeIsRunningOut]);

  useEffect(() => {
    if (gameTimeLeft === lengthOfRounds) {
      setBgColor("lightMain");
      setShadowColor("lightDark");
    }
  }, [gameTimeLeft]);

  useEffect(() => {
    setBgColor("lightMain");
    setShadowColor("lightDark");
  }, []);

  return (
    <TextContainer shadowColor={shadowColor} padding={false}>
      <div
        className={`w-full flex justify-center bg-${bgColor} p-4 rounded transition-colors duration-150 ease-in-out`}
      >
        <p className="text-2xl">{renderTime(gameTimeLeft)}</p>
      </div>
    </TextContainer>
  );
};

export default GameTimer;
