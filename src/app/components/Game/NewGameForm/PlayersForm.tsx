import React from "react";
import { H2 } from "../../Typography";
import ButtonStandard from "../../Button/variants/ButtonStandard";
import { Player } from "@/context/AppContext";
import { useTranslations } from "next-intl";
import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import TextContainer from "../../containers/TextContainer";
import LabelWrapper from "../../Form/LabelWrapper";
import Input from "../../Form/Input";

interface Props {
  numberOfPlayers: number;
  onPlayersFormSubmit: (players: Player[]) => void;
}

export type PlayersFormValues = {
  players: Player[];
};

const PlayersForm = ({ numberOfPlayers, onPlayersFormSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PlayersFormValues>({
    defaultValues: {
      players: Array.from(Array(numberOfPlayers) as Player[]).fill({
        name: "",
        points: 0,
      }),
    },
    mode: "onBlur",
  });
  const t = useTranslations("Game.new_game.players_form");
  const rules = {
    required: t("error_messages.player_name"),
  };
  const { fields } = useFieldArray({
    control,
    name: "players",
  });
  const onSubmit: SubmitHandler<PlayersFormValues> = (data) => {
    const players = data.players.map((player) => ({
      ...player,
      name: player.name.at(0)?.toUpperCase() + player.name.slice(1),
    }));
    onPlayersFormSubmit(players);
  };

  return (
    <TextContainer shadowColor="secondLighter">
      <H2>{`${t("input_title")}`}</H2>
      <form
        className="w-full h-full flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {fields.map((field, index) => (
          <LabelWrapper
            key={field.id}
            name={`players.${index}.name`}
            label={`${t("input_label")} ${index + 1}`}
            errors={
              (errors?.players?.[index]?.name as FieldValues) || undefined
            }
            horizontal
          >
            <Input<PlayersFormValues>
              name={`players.${index}.name` as const}
              register={register}
              rules={rules}
            />
          </LabelWrapper>
        ))}
        <ButtonStandard type="submit">{t("submit_button_text")}</ButtonStandard>
      </form>
    </TextContainer>
  );
};

export default PlayersForm;
