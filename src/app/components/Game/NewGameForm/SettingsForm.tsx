"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TextContainer from "../../containers/TextContainer";
import { useTranslations } from "next-intl";
import LabelWrapper from "../../Form/LabelWrapper";
import Input from "../../Form/Input";
import DynamicInput from "../../Form/DynamicInput";
import ButtonStandard from "../../Button/variants/ButtonStandard";
import Checkbox from "../../Form/Checkbox";
import Select from "../../Form/Select";
import { H2 } from "../../Typography";
import { GameSettings } from "@/gameConfig";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "@/navigation";

const SettingsForm = () => {
  const { gameSettings, handleSetGameSettings } = useAppContext();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<GameSettings>({
    defaultValues: {
      ...gameSettings,
    },
    mode: "onBlur",
  });
  const t = useTranslations("Game.new_game.settings_form");
  const registerOptions = {
    numberOfPlayers: {
      valueAsNumber: true,
      min: { value: 2, message: t("error_messages.number_of_players") },
      max: { value: 10, message: t("error_messages.number_of_players") },
    },
    numberOfRounds: {
      valueAsNumber: true,
      min: { value: 3, message: t("error_messages.number_of_rounds") },
      max: { value: 99, message: t("error_messages.number_of_rounds") },
    },
    lengthOfRounds: {
      valueAsNumber: true,
      min: { value: 10, message: t("error_messages.length_of_rounds") },
      max: { value: 999, message: t("error_messages.length_of_rounds") },
      message: t("error_messages.length_of_rounds"),
    },
    categories: {
      rules: {
        validate: (values: GameSettings["categories"]) => {
          if (values.length > 0 && values.every((value) => !value.value)) {
            return t("error_messages.categories");
          }
        },
      },
    },
  };
  const options = Array.from({ length: 9 }, (_, index) =>
    (index + 2).toString()
  );

  const onSubmit: SubmitHandler<GameSettings> = (data) => {
    const settings = {
      ...data,
      numberOfPlayers:
        typeof data.numberOfPlayers === "string"
          ? parseInt(data.numberOfPlayers)
          : data.numberOfPlayers,
      categories: data.categories.filter((category) => category.value !== ""),
    };
    handleSetGameSettings(settings);
    router.push("/game/new-game/player-names");
  };

  return (
    <TextContainer shadowColor="secondLighter">
      <H2>{t("title")}</H2>
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
            options={options}
            name="numberOfPlayers"
            register={register}
            registerOptions={registerOptions.numberOfPlayers}
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
          <Input<GameSettings>
            name="numberOfRounds"
            register={register}
            maxLength={2}
            widthFull={false}
            rules={registerOptions.numberOfRounds}
          />
        </LabelWrapper>
        <LabelWrapper
          label={t("length_of_rounds_label")}
          name="lengthOfRounds"
          errors={errors}
        >
          <Input<GameSettings>
            name="lengthOfRounds"
            register={register}
            maxLength={3}
            widthFull={false}
            rules={registerOptions.lengthOfRounds}
          />
        </LabelWrapper>
        <LabelWrapper
          label={t("categories_label")}
          name="categories"
          horizontal
          errors={errors}
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
