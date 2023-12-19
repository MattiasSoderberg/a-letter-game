import React from "react";
import TextContainer from "../containers/TextContainer";
import { H2, TextLarge, TextRegular, TextSmall } from "../Typography";
import LinkButton from "../Link/LinkButton";
import { useTranslations } from "next-intl";
import { WinningPlayer } from "./Game";

interface Props {
  winningPlayers: WinningPlayer[];
  onLinkClick: () => void;
}

const GameFinished = ({ winningPlayers, onLinkClick }: Props) => {
  const t = useTranslations("Game");

  return (
    <div className="mb-auto mt-16">
      <TextContainer>
        <H2>{t("winner_title")}</H2>
        {winningPlayers.length > 0 &&
          winningPlayers.map((player, index) =>
            player?.place === 1 ? (
              <div
                className="w-full flex items-center gap-2"
                key={`winners-${index}`}
              >
                <TextLarge>
                  {player?.place}. {player?.name}
                </TextLarge>
                <TextRegular>
                  {player?.points} {t("points")}
                </TextRegular>
              </div>
            ) : (
              <div
                className="w-full flex items-center gap-2"
                key={`winners-${index}`}
              >
                <TextRegular>
                  {player?.place}. {player?.name}
                </TextRegular>
                <TextSmall>
                  {player?.points} {t("points")}
                </TextSmall>
              </div>
            )
          )}
        <LinkButton href="/" onClick={onLinkClick}>
          {t("back_to_start_button_text")}
        </LinkButton>
      </TextContainer>
    </div>
  );
};

export default GameFinished;
