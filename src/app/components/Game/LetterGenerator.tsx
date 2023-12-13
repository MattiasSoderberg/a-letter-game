import React, { useEffect, useState } from "react";
import TextContainer from "../containers/TextContainer";
import { useLocale } from "next-intl";

interface Props {
  children: React.ReactNode;
  alphabeth: string;
  hardLetters: string;
  localLetters?: string;
  usedLetters: string[];
  currentLetter: string;
  roundNumber: number;
  letterCountDown: number;
  repeatingLetters: boolean;
  isRoundActive: boolean;
  removeHardLetters: boolean;
  removeLocalLetters: boolean;
  handleSetCurrentLetter: (letter: string) => void;
}

const LetterGenerator = ({
  children,
  alphabeth,
  hardLetters,
  localLetters,
  usedLetters,
  currentLetter,
  roundNumber,
  letterCountDown,
  repeatingLetters,
  isRoundActive,
  removeHardLetters,
  removeLocalLetters,
  handleSetCurrentLetter,
}: Props) => {
  const [activeLetters, setActiveLetters] = useState<string[]>([]);
  const [borderColor, setBorderColor] = useState("firstLight");

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
    } else if (letterCountDown === 3) {
      setBorderColor("thirdMain");
    }
  }, [letterCountDown]);

  useEffect(() => {
    if (isRoundActive) {
      setBorderColor("firstLight");
    } else if (!isRoundActive) {
      setBorderColor("danger");
    }
  }, [isRoundActive]);

  useEffect(() => {
    const hardLettersArray = removeHardLetters ? hardLetters.split(",") : [];
    const localLettersArray = removeLocalLetters
      ? localLetters?.split(",")
      : [];
    const lettersArray = alphabeth
      .split(",")
      .filter((letter) => !hardLettersArray.includes(letter))
      .filter((letter) => !localLettersArray?.includes(letter));

    setActiveLetters(lettersArray);

    setBorderColor("firstLight");
  }, []);

  return (
    <TextContainer>
      <div className="w-full flex justify-center py-4">
        <div className="w-[200px] h-full flex flex-col gap-10">
          <div
            className={`w-full h-[200px] flex justify-center items-center p-4 rounded-lg border-4 border-${borderColor} transition-colors duration-150 ease-in-out`}
          >
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
