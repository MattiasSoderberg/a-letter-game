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
  const [showShadow, setShowShadow] = useState(false);

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
      setShowShadow(true);
      setBgColor("firstMain");
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
      setShowShadow(false);
      setBgColor("lightMain");
      setShadowColor("lightDark");
    }
  }, [gameTimeLeft]);

  useEffect(() => {
    setBgColor("lightMain");
    setShadowColor("lightDark");
  }, []);

  return (
    <TextContainer padding={false}>
      <div
        className={`w-full h-full flex justify-center ${
          showShadow && "game-timer-shadow"
        } shadow-${shadowColor}  p-4 rounded transition-colors duration-100 ease-in-out relative`}
      >
        <div
          className={`w-full h-full bg-${bgColor} opacity-10 absolute top-0 left-0 z-0`}
        />
        <p className="text-2xl z-10">{renderTime(gameTimeLeft)}</p>
      </div>
    </TextContainer>
  );
};

export default GameTimer;
