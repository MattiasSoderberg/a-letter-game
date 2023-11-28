import React from "react";
// import Input from "../../Form/InputWIndex";
import { TextLarge } from "../../Typography";
import ButtonStandard from "../../Button/variants/ButtonStandard";
import { Player } from "@/context/AppContext";
import InputWIndex from "../../Form/InputWIndex";
import { useTranslations } from "next-intl";

interface Props {
  players: Player[];
  handleSetPlayers: (players: Player[]) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const PlayersForm = ({ players, handleSetPlayers, onSubmit }: Props) => {
  const t = useTranslations("Game.new_game.players_form");
  const handleOnChange = (
    index: number,
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const data = [...players];
    data[index];
    data[index]["name"] = event.currentTarget.value;
    handleSetPlayers(data);
  };

  return (
    <div className="w-full h-full flex flex-col gap-6 mb-6 overflow-hidden">
      <form
        className="w-full h-full flex flex-col gap-6 pb-10 overflow-y-auto"
        onSubmit={(e) => onSubmit(e)}
      >
        {players.length > 0 &&
          players.map((player, index) => (
            <div
              key={index}
              className="w-full h-max flex flex-col gap-4 p-4 bg-textContainerBG rounded shadow-md shadow-secondLight"
            >
              <TextLarge>{`Spelare ${index + 1}`}</TextLarge>
              <div className="flex flex-col gap-2">
                <label htmlFor={`input${index}`}>Namn</label>
                <InputWIndex
                  name="name"
                  value={player.name}
                  onChange={handleOnChange}
                  index={index}
                />
              </div>
            </div>
          ))}
        <ButtonStandard type="submit">{t("submit_button_text")}</ButtonStandard>
      </form>
    </div>
  );
};

export default PlayersForm;
