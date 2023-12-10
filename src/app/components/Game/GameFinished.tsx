import { Player } from "@/context/AppContext";
import React from "react";
import TextContainer from "../containers/TextContainer";
import { H2, TextLarge, TextRegular, TextSmall } from "../Typography";
import LinkButton from "../Link/LinkButton";
import { useTranslations } from "next-intl";

interface Props {
  winningPlayers: Player[];
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
            index === 0 ? (
              <div
                className="w-full flex items-center gap-2"
                key={`winners-${index}`}
              >
                <TextLarge>
                  {index + 1}. {player?.name}
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
                  {index + 1}. {player?.name}
                </TextRegular>
                <TextSmall>
                  {player?.points} {t("points")}
                </TextSmall>
              </div>
            )
          )}
        <LinkButton href="/" onClick={onLinkClick}>
          {t("link_button")}
        </LinkButton>
      </TextContainer>
    </div>
  );
};

export default GameFinished;
