import React, { useEffect, useState } from "react";
import TextContainer from "../containers/TextContainer";

interface Props {
  children: React.ReactNode;
  alphabeth: string;
  usedLetters: string[];
  currentLetter: string;
  roundNumber: number;
  letterCountDown: number;
  repeatingLetters: boolean;
  handleSetCurrentLetter: (letter: string) => void;
}

const LetterGenerator = ({
  children,
  alphabeth,
  usedLetters,
  currentLetter,
  roundNumber,
  letterCountDown,
  repeatingLetters,
  handleSetCurrentLetter,
}: Props) => {
  const [activeLetters, setActiveLetters] = useState(alphabeth.split(","));

  const generateNewLetter = () => {
    handleSetCurrentLetter(
      activeLetters[Math.floor(Math.random() * activeLetters.length)]
    );
  };

  useEffect(() => {
    if (!repeatingLetters) {
      setActiveLetters([
        ...activeLetters.filter((letter) => !usedLetters.includes(letter)),
      ]);
    }
  }, [roundNumber]);

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
