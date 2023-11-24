"use client";
import { useAppContext } from "@/context/AppContext";
import React, { useEffect, useRef, useState } from "react";
import TextContainer from "../containers/TextContainer";

interface Props {
  isRoundActive: boolean;
  handleSetRoundIsActive: (active: boolean) => void;
}

const GameTimer = ({ isRoundActive, handleSetRoundIsActive }: Props) => {
  const { gameSettings } = useAppContext();
  const [timeLeft, setTimeLeft] = useState(gameSettings.lengthOfRounds);
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
      setTimeLeft(gameSettings.lengthOfRounds);
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
            const timerId = setTimeout(() => {
              setBgColor("transparent");
              clearTimeout(timerId);
            }, 5000);
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

  return (
    <TextContainer>
      <div
        className={`w-full flex justify-center bg-${bgColor} rounded p-4 transition-colors duration-300 ease-in-out`}
      >
        <p className="text-3xl">{renderTime(timeLeft)}</p>
      </div>
    </TextContainer>
  );
};

export default GameTimer;
