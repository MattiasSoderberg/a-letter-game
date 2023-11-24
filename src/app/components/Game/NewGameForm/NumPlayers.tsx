import React, { useEffect, useState } from "react";
import { H2, TextLarge } from "../../Typography";
import TextContainer from "../../containers/TextContainer";
import Input from "../../Form/Input";
import Checkbox from "../../Form/Checkbox";
import { GameSettings } from "./NewGameForm";
import ButtonStandard from "../../Button/variants/ButtonStandard";

interface Props {
  gameSettings: GameSettings;
  onSettingsFormSubmit: (settings: GameSettings) => void;
}

const NumPlayers = ({ gameSettings, onSettingsFormSubmit }: Props) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [repeatingLetters, setRepeatingLetters] = useState(
    gameSettings.repeatingLetters
  );
  const [numberOfRounds, setNumberOfRounds] = useState<number>(
    gameSettings.numberOfRounds
  );
  const [lengthOfRounds, setLengthOfRounds] = useState(
    gameSettings.lengthOfRounds
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const settings = {
      numberOfPlayers,
      repeatingLetters,
      numberOfRounds,
      lengthOfRounds,
    };
    onSettingsFormSubmit(settings);
  };

  const numberOfPlayersOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNumberOfPlayers(parseInt(e.target.value));
  };

  const numOfRoundsOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfRounds(parseInt(e.target.value));
  };

  const lengthOfRoundOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLengthOfRounds(parseInt(e.target.value));
  };

  const handleCheckboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatingLetters(e.target.checked);
  };

  // useEffect(() => {
  //   const { repeatingLetters, numberOfRounds, lengthOfRounds } = gameSettings;
  //   setRepeatingLetters(repeatingLetters);
  //   setNumberOfRounds(numberOfRounds);
  //   setLengthOfRounds(lengthOfRounds);
  // }, []);

  return (
    <TextContainer>
      <form className="w-full flex flex-col gap-10" onSubmit={onSubmit}>
        <div className="w-full flex justify-between">
          <label>
            <TextLarge>Hur många spelare?</TextLarge>
          </label>
          <select
            value={numberOfPlayers}
            onChange={numberOfPlayersOnChange}
            className="w-max py-1 px-2 outline-firstDark border border-1 border-firstLight rounded relative"
          >
            {Array.from(Array(10)).map((_, index) => {
              return (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-full flex justify-between">
          <label>
            <TextLarge>Upprepande bokstäver?</TextLarge>
          </label>
          <Checkbox
            name="repeatingLetters"
            checked={repeatingLetters}
            onChange={handleCheckboxOnChange}
          />
        </div>
        <div className="w-full flex justify-between">
          <label>
            <TextLarge>Antal omgångar</TextLarge>
          </label>
          <Input
            name="numberOfRounds"
            value={`${numberOfRounds}`}
            onChange={numOfRoundsOnChange}
          />
        </div>
        <div className="w-full flex justify-between">
          <label>
            <TextLarge>Tid per omgång</TextLarge>
          </label>
          <Input
            name="lengthOfRounds"
            value={`${lengthOfRounds}`}
            onChange={lengthOfRoundOnChange}
          />
        </div>

        <ButtonStandard type="submit" size="sm">
          Vidare
        </ButtonStandard>
      </form>
    </TextContainer>
  );
};

export default NumPlayers;
