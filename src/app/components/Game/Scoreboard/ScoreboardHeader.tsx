import React, { useEffect } from "react";
import { H1, TextSmall } from "../../Typography";
import { useForm } from "react-hook-form";
import { useAppContext } from "@/context/AppContext";
import { useTranslations } from "next-intl";
import LabelWrapper from "../../Form/LabelWrapper";
import Input from "../../Form/Input";
import { GameSettings } from "@/gameConfig";
import useScoreboard from "@/hooks/useScoreboard";

interface Props {
  heading: string;
  currentLetter: string;
}

type FormValues = {
  lengthOfRounds: GameSettings["lengthOfRounds"];
};

const ScoreboardHeader = ({ heading, currentLetter }: Props) => {
  const t = useTranslations("Game.new_game.settings_form");
  const { gameSettings, handleSetGameSettings } = useAppContext();
  const { closeScoreboard } = useScoreboard();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { lengthOfRounds: gameSettings.lengthOfRounds },
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const rules = {
    valueAsNumber: true,
    required: { value: true, message: t("error_messages.length_of_rounds") },
    min: { value: 10, message: t("error_messages.length_of_rounds") },
    max: { value: 999, message: t("error_messages.length_of_rounds") },
  };

  const onSubmit = (data: FormValues) => {
    handleSetGameSettings(data as GameSettings);
  };

  useEffect(() => {
    const subscription = watch(() => {
      handleSubmit(onSubmit)();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="w-full flex justify-between">
      <div className="flex flex-col gap-2">
        <H1>{heading}</H1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            closeScoreboard();
          }}
        >
          <LabelWrapper
            label={t("length_of_rounds_label")}
            name="lengthOfRounds"
            size="sm"
            horizontal
          >
            <div className="flex items-center gap-4">
              <Input
                name="lengthOfRounds"
                register={register}
                maxLength={3}
                widthFull={false}
                size="sm"
                type="number"
                rules={rules}
              />
              {errors && (
                <TextSmall color="danger">
                  {errors?.["lengthOfRounds"]?.message}
                </TextSmall>
              )}
            </div>
          </LabelWrapper>
        </form>
      </div>
      {currentLetter !== "?" && (
        <div className="w-1/5 h-max flex justify-center p-2 rounded-lg border-2 border-firstLight">
          <p className="text-2xl text-darkMain">{currentLetter}</p>
        </div>
      )}
    </div>
  );
};

export default ScoreboardHeader;
