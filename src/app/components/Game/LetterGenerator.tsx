import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import ButtonStandard from "../Button/variants/ButtonStandard";

interface Props {
  alphabeth: string;
}

const LetterGenerator = ({ alphabeth }: Props) => {
  const [currentLetter, setCurrentLetter] = useState<string>("?");
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const t = useTranslations("Game");
  const letters = alphabeth.split(",");

  const generateLetter = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setCurrentLetter(letters[Math.floor(Math.random() * (letters.length - 1))]);
    setTimeLeft(3);
    startTimer();
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="w-full flex justify-center bg-textContainerBG p-10 shadow-md">
      <div className="w-max flex flex-col items-center justify-center gap-6">
        <div className="w-full h-[160px] flex justify-center items-center p-4 bg-textContainerBG shadow-md">
          <p className="text-9xl text-darkMain">
            {timeLeft > 0 ? timeLeft : currentLetter}
          </p>
        </div>
        <ButtonStandard onClick={generateLetter}>
          {currentLetter === "?"
            ? t("initial_generate_letter_button_text")
            : t("generate_letter_button_text")}
        </ButtonStandard>
      </div>
    </div>
  );
};

export default LetterGenerator;
