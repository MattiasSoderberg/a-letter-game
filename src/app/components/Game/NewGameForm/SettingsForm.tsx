import React from "react";
import { GameSettings } from "@/context/AppContext";
import { SubmitHandler, useForm } from "react-hook-form";
import TextContainer from "../../containers/TextContainer";
import { useTranslations } from "next-intl";
import LabelWrapper from "../../Form/LabelWrapper";
import Input from "../../Form/Input";
import DynamicInput from "../../Form/DynamicInput";
import ButtonStandard from "../../Button/variants/ButtonStandard";
import Checkbox from "../../Form/Checkbox";
import Select from "../../Form/Select";

interface Props {
  gameSettings: GameSettings;
  onSettingsFormSubmit: (settings: GameSettings) => void;
}

const SettingsForm = ({ gameSettings, onSettingsFormSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<GameSettings>({
    defaultValues: {
      numberOfPlayers: gameSettings.numberOfPlayers,
      repeatingLetters: gameSettings.repeatingLetters,
      numberOfRounds: gameSettings.numberOfRounds,
      lengthOfRounds: gameSettings.lengthOfRounds,
      categories: gameSettings.categories,
    },
    reValidateMode: "onBlur",
  });
  const t = useTranslations("Game.new_game.settings_form");
  const registerOptions = {
    numberOfPlayers: {
      setValueAs: (v: string) => parseInt(v),
      min: { value: 2, message: t("error_messages.number_of_players") },
      max: { value: 10, message: t("error_messages.number_of_players") },
    },
    numberOfRounds: {
      setValueAs: (v: string) => parseInt(v),
      min: { value: 3, message: t("error_messages.number_of_rounds") },
      max: { value: 99, message: t("error_messages.number_of_rounds") },
    },
    lengthOfRounds: {
      setValueAs: (v: string) => parseInt(v),
      min: { value: 10, message: t("error_messages.length_of_rounds") },
      max: { value: 999, message: t("error_messages.length_of_rounds") },
      message: t("error_messages.length_of_rounds"),
    },
    categories: {
      rules: {
        validate: (values: typeof gameSettings.categories) => {
          if (values.length === 1 && !values[0].value) {
            return t("error_messages.categories");
          }
        },
      },
      inputOptions: { minLength: { value: 1, message: "får inte vara tom" } },
    },
  };

  const onSubmit: SubmitHandler<GameSettings> = (data) => {
    const payload = {
      ...data,
      categories: data.categories.filter((category) => category.value !== ""),
    };
    onSettingsFormSubmit(payload);
  };

  return (
    <TextContainer>
      <form
        className="w-full h-full flex flex-col gap-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <LabelWrapper
          label={t("number_of_players_label")}
          name="numberOfPlayers"
          errors={errors}
        >
          <Select
            name="numberOfPlayers"
            register={register}
            defaultValue={gameSettings.numberOfPlayers}
          />
        </LabelWrapper>
        <LabelWrapper
          label={t("repeating_letters_label")}
          name="repeatingLetters"
          errors={errors}
        >
          <Checkbox name="repeatingLetters" register={register} />
        </LabelWrapper>
        <LabelWrapper
          label={t("number_of_rounds_label")}
          name="numberOfRounds"
          errors={errors}
        >
          <Input
            name="numberOfRounds"
            register={register}
            maxLength={2}
            widthFull={false}
            registerOptions={registerOptions}
          />
        </LabelWrapper>
        <LabelWrapper
          label={t("length_of_rounds_label")}
          name="lengthOfRounds"
          errors={errors}
        >
          <Input
            name="lengthOfRounds"
            register={register}
            maxLength={3}
            widthFull={false}
            registerOptions={registerOptions}
          />
        </LabelWrapper>
        <LabelWrapper
          label={t("categories_label")}
          name="categories"
          errors={errors}
          horizontal
        >
          <DynamicInput
            name="categories"
            buttonText={t("add_category_button_text")}
            register={register}
            registerOptions={registerOptions["categories"]}
            control={control}
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
