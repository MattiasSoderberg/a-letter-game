"use client";
import { useAppContext } from "@/context/AppContext";
import React, { useEffect, useRef, useState } from "react";
import TextContainer from "../containers/TextContainer";

interface Props {
  isRoundActive: boolean;
  handleSetRoundIsActive: (active: boolean) => void;
}

const GameTimer = ({ isRoundActive, handleSetRoundIsActive }: Props) => {
  const { roundLengthInSeconds } = useAppContext();
  const [timeLeft, setTimeLeft] = useState(roundLengthInSeconds);
  const [roundComplete, setRoundComplete] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const timerRef = useRef<ReturnType<typeof setInterval>>();

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
      setRoundComplete(false);
      setTimeLeft(roundLengthInSeconds);
      setBgColor("transparent");
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime < 11) {
            setBgColor("thirdMain");
          }
          if (prevTime < 6) {
            setBgColor("secondLight");
          }
          if (prevTime === 1) {
            clearInterval(timerRef.current);
            setRoundComplete(true);
            setBgColor("danger");
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isRoundActive]);

  useEffect(() => {
    if (roundComplete) {
      handleSetRoundIsActive(false);
    }
  }, [roundComplete]);

  console.log("GAME TIMER", timeLeft, isRoundActive);

  return (
    <TextContainer>
      <div className={`w-full flex justify-center bg-${bgColor} rounded p-4`}>
        <p className="text-3xl">{renderTime(timeLeft)}</p>
      </div>
    </TextContainer>
  );
};

export default GameTimer;
