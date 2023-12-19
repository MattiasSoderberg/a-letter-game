"use client";
import React, { useEffect, useRef, useState } from "react";
import { Player, useAppContext } from "@/context/AppContext";
import { TextLarge } from "../Typography";
import { useRouter } from "@/navigation";
import LetterGenerator from "./LetterGenerator";
import { useTranslations } from "next-intl";
import GameTimer from "./GameTimer";
import HeaderDisplay from "./HeaderDisplay";
import ButtonStandard from "../Button/variants/ButtonStandard";
import GameFinished from "./GameFinished";
import Scoreboard from "./Scoreboard/Scoreboard";
import useScoreboard from "@/hooks/useScoreboard";

export type WinningPlayer = Player & { place: number };

const Game = () => {
  const { players, gameSettings, resetPlayerScore, resetPlayers, resetGame } =
    useAppContext();
  const { openScoreboard } = useScoreboard();
  const [currentLetter, setCurrentLetter] = useState("?");
  const [isRoundActive, setIsRoundActive] = useState(false);
  const [roundNumber, setRoundNumber] = useState(1);
  const [usedLetters, setUsedLetters] = useState<string[]>([]);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [letterCountdown, setLetterCountDown] = useState(3);
  const [isCountdownActive, setIsCountDownActive] = useState(false);
  const [gameTimeLeft, setGameTimeLeft] = useState(gameSettings.lengthOfRounds);
  const [timeIsRunningOut, setTimeIsRunningOut] = useState(false);
  const [winningPlayers, setWinningPlayers] = useState<WinningPlayer[]>([]);
  const [isButtonActive, setIsButtonActive] = useState(true);
  const [buttonText, setButtonText] = useState("");
  const [prevActiveRoundText, setPrevActiveRoundText] = useState<string[]>([]);
  const letterCountdownRef = useRef<ReturnType<typeof setInterval>>();
  const gameTimerRef = useRef<ReturnType<typeof setInterval>>();
  const router = useRouter();
  const t = useTranslations("Game");
  const littleTimeLeftLimit =
    gameSettings.lengthOfRounds >= 30
      ? Math.round(gameSettings.lengthOfRounds * 0.25)
      : 6;

  const handleSetCurrentLetter = (letter: string) => {
    setCurrentLetter(letter);
    if (letter && letter !== "?") {
      setIsRoundActive(true);
    }
  };

  const incrementRoundNumber = () => {
    setRoundNumber((prev) => prev + 1);
  };

  const onClickNewLetter = () => {
    setCurrentLetter("");
    setIsButtonActive(false);
    handleSetButtonText("countdown");
    setIsCountDownActive(true);
    if (letterCountdownRef.current) {
      clearInterval(letterCountdownRef.current);
    }
    if (currentLetter && currentLetter !== "?") {
      incrementRoundNumber();
    }

    setLetterCountDown(3);
    setGameTimeLeft(gameSettings.lengthOfRounds);

    letterCountdownRef.current = setInterval(() => {
      setLetterCountDown((prev) => prev - 1);
    }, 1000);
  };

  const onClickFinishGame = () => {
    setIsGameFinished(true);
  };

  // const resetGame = () => {
  //   resetPlayers();
  // };

  const resetCurrentGame = () => {
    resetPlayerScore();
  };

  const handleSetButtonText = (
    state:
      | "initial"
      | "generateLetter"
      | "activeRound"
      | "countdown"
      | "endOfRound"
      | "finished"
  ) => {
    const activeRoundOptions = t(
      "generate_letter_button_active_round_text_options"
    ).split(",");

    switch (state) {
      case "initial":
        setButtonText(t("generate_letter_button_initial_text"));
        break;
      case "generateLetter":
        setButtonText(t("generate_letter_button_text"));
        break;
      case "activeRound":
        let activeRoundText: string;

        if (prevActiveRoundText.length >= activeRoundOptions.length) {
          setPrevActiveRoundText([]);
        }

        do {
          activeRoundText =
            activeRoundOptions[
              Math.floor(Math.random() * activeRoundOptions.length)
            ];
        } while (prevActiveRoundText.includes(activeRoundText));

        setPrevActiveRoundText((prev) => {
          if (prev.length + 1 >= activeRoundOptions.length) {
            return [];
          }
          return [...prev, activeRoundText];
        });
        setButtonText(activeRoundText);
        break;
      case "countdown":
        setButtonText(t("generate_letter_button_countdown_text"));
        break;
      case "endOfRound":
        setButtonText(t("generate_letter_button_end_of_round_text"));
        break;
      case "finished":
        setButtonText(t("finnish_game"));
        break;
      default:
        setButtonText(t("generate_letter_button_initial_text"));
        break;
    }
  };

  useEffect(() => {
    if (isRoundActive && currentLetter !== "?") {
      setGameTimeLeft(gameSettings.lengthOfRounds);
      setTimeIsRunningOut(false);
      handleSetButtonText("activeRound");
      gameTimerRef.current = setInterval(() => {
        setGameTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(gameTimerRef.current);
            setIsRoundActive(false);
            setGameTimeLeft(gameSettings.lengthOfRounds);
          }
          return prev - 1;
        });
      }, 1000);
    }

    if (currentLetter !== "?" && !isRoundActive) {
      setUsedLetters((prev) => [...prev, currentLetter]);
      handleSetButtonText("endOfRound");

      const parentTimer = setTimeout(() => {
        openScoreboard();
        clearTimeout(parentTimer);
        const childTimer = setTimeout(() => {
          setIsButtonActive(true);
          if (roundNumber >= gameSettings.numberOfRounds) {
            handleSetButtonText("finished");
          } else {
            handleSetButtonText("generateLetter");
          }
          clearTimeout(childTimer);
        }, 500);
      }, 1000);
    }
  }, [isRoundActive]);

  useEffect(() => {
    if (gameTimeLeft < littleTimeLeftLimit) {
      setTimeIsRunningOut(true);
    }
  }, [gameTimeLeft]);

  useEffect(() => {
    if (letterCountdownRef.current && letterCountdown === 0) {
      clearInterval(letterCountdownRef.current);
      setIsRoundActive(true);
      setIsCountDownActive(false);
    }
  }, [letterCountdown]);

  useEffect(() => {
    if (isGameFinished) {
      const sortedPlayers = players
        .map((player, index) => ({ ...player, place: index + 1 }))
        .sort((a, b) => b.points - a.points)
        .slice(0, players.length >= 3 ? 3 : 2)
        .reduce(
          (
            acc: WinningPlayer[],
            player: WinningPlayer,
            index: number,
            players: WinningPlayer[]
          ) => {
            if (index > 0 && players[index - 1].points === player.points) {
              player.place = players[index - 1].place;
            } else {
              player.place = index + 1;
            }
            acc.push(player);
            return acc;
          },
          []
        );

      setWinningPlayers(sortedPlayers);
    }
  }, [isGameFinished]);

  useEffect(() => {
    setGameTimeLeft(gameSettings.lengthOfRounds);
  }, [gameSettings.lengthOfRounds]);

  useEffect(() => {
    if (players.length <= 0) {
      router.push("/game/new-game");
    }

    handleSetButtonText("initial");

    return () => {
      if (letterCountdownRef.current) {
        clearInterval(letterCountdownRef.current);
      }
      if (gameTimerRef.current) {
        clearInterval(gameTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-full max-h-[650px] flex flex-col justify-between gap-4 px-4">
      {players.length > 0 ? (
        <>
          <Scoreboard
            players={players}
            currentLetter={currentLetter}
            categories={gameSettings.categories}
          />
          <HeaderDisplay
            categories={gameSettings.categories}
            numberOfRounds={gameSettings.numberOfRounds}
            roundNumber={
              roundNumber < gameSettings.numberOfRounds
                ? roundNumber
                : gameSettings.numberOfRounds
            }
          />
          {!isGameFinished ? (
            <>
              <GameTimer
                gameTimeLeft={gameTimeLeft}
                lengthOfRounds={gameSettings.lengthOfRounds}
                timeIsRunningOut={timeIsRunningOut}
                isRoundActive={isRoundActive}
              />
              <LetterGenerator
                alphabeth={t("alphabet")}
                hardLetters={t("hard_letters")}
                localLetters={t("local_letters")}
                usedLetters={usedLetters}
                currentLetter={currentLetter}
                roundNumber={roundNumber}
                letterCountDown={letterCountdown}
                isCountdownActive={isCountdownActive}
                repeatingLetters={gameSettings.repeatingLetters}
                isRoundActive={isRoundActive}
                removeHardLetters={gameSettings.removeHardLetters}
                removeLocalLetters={gameSettings.removeLocalLetters}
                handleSetCurrentLetter={handleSetCurrentLetter}
              >
                {roundNumber === gameSettings.numberOfRounds &&
                !isRoundActive &&
                !isCountdownActive ? (
                  <ButtonStandard
                    onClick={onClickFinishGame}
                    size="sm"
                    hovers=""
                    disabled={!isButtonActive}
                  >
                    {buttonText}
                  </ButtonStandard>
                ) : (
                  <ButtonStandard
                    onClick={onClickNewLetter}
                    size="sm"
                    hovers=""
                    disabled={!isButtonActive}
                  >
                    {buttonText}
                  </ButtonStandard>
                )}
              </LetterGenerator>
            </>
          ) : (
            <GameFinished
              winningPlayers={winningPlayers}
              onLinkClick={resetGame}
              onPlayAgainClick={resetCurrentGame}
            />
          )}
        </>
      ) : (
        <TextLarge>{t("no_active_game")}</TextLarge>
      )}
    </div>
  );
};

export default Game;
