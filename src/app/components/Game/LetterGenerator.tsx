import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import ButtonStandard from "../Button/variants/ButtonStandard";
import TextContainer from "../containers/TextContainer";

interface Props {
  children: React.ReactNode;
  alphabeth: string;
  currentLetter: string;
  letterCountDown: number;
  isRoundActive: boolean;
  handleSetCurrentLetter: (letter: string) => void;
}

const LetterGenerator = ({
  children,
  alphabeth,
  currentLetter,
  letterCountDown,
  handleSetCurrentLetter,
}: Props) => {
  const letters = alphabeth.split(",");

  const generateNewLetter = () => {
    handleSetCurrentLetter(letters[Math.floor(Math.random() * letters.length)]);
  };

  useEffect(() => {
    if (letterCountDown === 0) {
      generateNewLetter();
    }
  }, [letterCountDown]);

  return (
    <TextContainer>
      <div className="w-full flex justify-center py-4">
        <div className="w-[200px] h-full flex flex-col gap-10">
          <div className="w-full h-[200px] flex justify-center items-center p-4 bg-textContainerBG rounded-lg border-4 border-firstLight">
            <p className="text-9xl text-darkMain">
              {currentLetter === "?"
                ? currentLetter
                : letterCountDown > 0
                ? letterCountDown
                : currentLetter}
            </p>
          </div>
          {children}
        </div>
      </div>
    </TextContainer>
  );
};

export default LetterGenerator;
