"use client";
import React, { useEffect, useRef, useState } from "react";
import { Player, useAppContext } from "@/context/AppContext";
import { TextLarge } from "../Typography";
import { useRouter } from "@/navigation";
import LetterGenerator from "./LetterGenerator";
import { useTranslations } from "next-intl";
import GameTimer from "./GameTimer";
import PlayerCardDrawer from "./PlayerCardDrawer";
import HeaderDisplay from "./HeaderDisplay";
import usePlayerCardsDrawer from "@/hooks/usePlayerCardsDrawer";
import ButtonStandard from "../Button/variants/ButtonStandard";
import GameFinished from "./GameFinished";

export type WinningPlayer = Player & { place: number };

const Game = () => {
  const { players, gameSettings, resetPlayerScore } = useAppContext();
  const { openPlayerCardDrawer } = usePlayerCardsDrawer();
  const [currentLetter, setCurrentLetter] = useState("?");
  const [isRoundActive, setIsRoundActive] = useState(false);
  const [roundNumber, setRoundNumber] = useState(1);
  const [usedLetters, setUsedLetters] = useState<string[]>([]);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [letterCountdown, setLetterCountDown] = useState(3);
  const [gameTimeLeft, setGameTimeLeft] = useState(gameSettings.lengthOfRounds);
  const [timeIsRunningOut, setTimeIsRunningOut] = useState(false);
  const [winningPlayers, setWinningPlayers] = useState<WinningPlayer[]>([]);
  const letterCountdownRef = useRef<ReturnType<typeof setInterval>>();
  const gameTimerRef = useRef<ReturnType<typeof setInterval>>();
  const router = useRouter();
  const t = useTranslations("Game");
  const littleTimeLeftLimit =
    gameSettings.lengthOfRounds > 30
      ? Math.ceil(gameSettings.lengthOfRounds * 0.2)
      : 5;

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

  const resetGame = () => {
    setUsedLetters([]);
    resetPlayerScore();
  };

  useEffect(() => {
    if (players.length <= 0) {
      router.push("/game/new-game");
    }
  }, []);

  useEffect(() => {
    if (isRoundActive && currentLetter !== "?") {
      setGameTimeLeft(gameSettings.lengthOfRounds);
      setTimeIsRunningOut(false);
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

      const timer = setTimeout(() => {
        openPlayerCardDrawer();
        clearTimeout(timer);
      }, 2000);
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
          <PlayerCardDrawer
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
                alphabeth={t("alphabeth")}
                usedLetters={usedLetters}
                currentLetter={currentLetter}
                roundNumber={roundNumber}
                letterCountDown={letterCountdown}
                repeatingLetters={gameSettings.repeatingLetters}
                isRoundActive={isRoundActive}
                handleSetCurrentLetter={handleSetCurrentLetter}
              >
                {roundNumber === gameSettings.numberOfRounds &&
                !isRoundActive ? (
                  <ButtonStandard onClick={onClickFinishGame} size="sm">
                    {t("finnish_game")}
                  </ButtonStandard>
                ) : (
                  <ButtonStandard onClick={onClickNewLetter} size="sm">
                    {currentLetter === "?"
                      ? t("initial_generate_letter_button_text")
                      : t("generate_letter_button_text")}
                  </ButtonStandard>
                )}
              </LetterGenerator>
            </>
          ) : (
            <GameFinished
              winningPlayers={winningPlayers}
              onLinkClick={resetGame}
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
