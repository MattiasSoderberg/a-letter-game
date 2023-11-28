import React, { useState } from "react";
import TextContainer from "../../containers/TextContainer";
import Input from "../../Form/Input";
import Checkbox from "../../Form/Checkbox";
import ButtonStandard from "../../Button/variants/ButtonStandard";
import { GameSettings } from "@/context/AppContext";
import DynamicInput from "../../Form/DynamicInput";
import { useTranslations } from "next-intl";
import LabelWrapper from "../../Form/LabelWrapper";

interface Props {
  gameSettings: GameSettings;
  onSettingsFormSubmit: (settings: GameSettings) => void;
}

const SettingsForm = ({ gameSettings, onSettingsFormSubmit }: Props) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [repeatingLetters, setRepeatingLetters] = useState(
    gameSettings.repeatingLetters
  );
  const [numberOfRounds, setNumberOfRounds] = useState<number>(
    gameSettings.numberOfRounds
  );
  const [lengthOfRounds, setLengthOfRounds] = useState<number>(
    gameSettings.lengthOfRounds
  );
  const [categories, setCategories] = useState(gameSettings.categories);
  const t = useTranslations("Game.new_game.settings_form");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const settings = {
      numberOfPlayers,
      repeatingLetters,
      numberOfRounds,
      lengthOfRounds,
      categories,
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

  const handleOnCategorisChange = (
    index: number,
    e: React.FormEvent<HTMLInputElement>
  ) => {
    const data = [...categories];
    data[index] = e.currentTarget.value;
    setCategories([...data]);
  };

  const handleOnAddCategory = () => {
    setCategories((prev) => [...prev, ""]);
  };

  const handleOnRemoveCategory = (index: number) => {
    if (categories.length <= 1) {
      const data = [...categories];
      data[index] = "";
      setCategories([...data]);
    } else {
      setCategories(categories.filter((_, i) => i !== index));
    }
  };

  return (
    <TextContainer>
      <form className="w-full flex flex-col gap-10" onSubmit={onSubmit}>
        <LabelWrapper
          label={t("number_of_players_label")}
          name="numberOfPlayers"
        >
          <select
            value={numberOfPlayers}
            name="numberOfPlayers"
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
        </LabelWrapper>
        <LabelWrapper
          label={t("repeating_letters_label")}
          name="repeatingLetters"
        >
          <Checkbox
            name="repeatingLetters"
            checked={repeatingLetters}
            onChange={handleCheckboxOnChange}
          />
        </LabelWrapper>
        <LabelWrapper label={t("number_of_rounds_label")} name="numberOfRounds">
          <Input
            name="numberOfRounds"
            value={`${numberOfRounds}`}
            onChange={numOfRoundsOnChange}
          />
        </LabelWrapper>
        <LabelWrapper label={t("length_of_rounds_label")} name="lengthOfRounds">
          <Input
            name="lengthOfRounds"
            value={`${lengthOfRounds}`}
            onChange={lengthOfRoundOnChange}
          />
        </LabelWrapper>
        <LabelWrapper
          label={t("categories_label")}
          name="categories"
          horizontal
        >
          <DynamicInput
            name="categories"
            buttonText={t("add_category_button_text")}
            inputArray={categories}
            onChange={handleOnCategorisChange}
            onAddClick={handleOnAddCategory}
            onRemoveClick={handleOnRemoveCategory}
          />
        </LabelWrapper>

        <ButtonStandard type="submit" size="sm">
          {t("submit_button_text")}
        </ButtonStandard>
      </form>
    </TextContainer>
  );
};

export default SettingsForm;
