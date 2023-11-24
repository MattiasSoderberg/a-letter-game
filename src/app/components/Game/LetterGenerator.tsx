import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import ButtonStandard from "../Button/variants/ButtonStandard";
import TextContainer from "../containers/TextContainer";

interface Props {
  alphabeth: string;
  currentLetter: string;
  handleSetCurrentLetter: (letter: string) => void;
}

const LetterGenerator = ({
  alphabeth,
  currentLetter,
  handleSetCurrentLetter,
}: Props) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const t = useTranslations("Game");
  const letters = alphabeth.split(",");

  const generateNewLetter = () => {
    handleSetCurrentLetter(letters[Math.floor(Math.random() * letters.length)]);
  };

  const generateLetter = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setTimeLeft(3);

    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(timerRef.current);
      generateNewLetter();
    }
  }, [timeLeft]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <TextContainer>
      <div className="w-full flex justify-center p-6">
        <div className="w-[200px] h-full flex flex-col items-center justify-center gap-10">
          <div className="w-full h-[200px] flex justify-center items-center p-4 bg-textContainerBG shadow-md rounded-lg">
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
    </TextContainer>
  );
};

export default LetterGenerator;
