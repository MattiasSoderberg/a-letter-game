import React from "react";
import TextContainer from "../containers/TextContainer";
import { H2, TextLarge, TextRegular } from "../Typography";
import { useTranslations } from "next-intl";
import Divider from "../DrawerMenu/Divider";
import { GameSettings } from "@/gameConfig";

interface Props {
  categories: GameSettings["categories"];
  numberOfRounds: GameSettings["numberOfRounds"];
  roundNumber: number;
}

const HeaderDisplay = ({ categories, numberOfRounds, roundNumber }: Props) => {
  const t = useTranslations("Game");
  return (
    <TextContainer>
      <div className="w-full h-fit flex flex-col gap-2">
        <div className="w-full flex justify-between items-end">
          <H2>{t("categories_title")}</H2>
          <div className="w-fit flex items-end gap-2">
            <TextRegular>{t("rounds_title")}</TextRegular>
            <TextRegular>
              {roundNumber}/{numberOfRounds}
            </TextRegular>
          </div>
        </div>
        <Divider color="darkLighter" />
        <div className="w-full flex flex-wrap gap-x-8 gap-y-2 justify-between">
          {categories.map((category) => (
            <TextRegular key={category.value}>{category.value}</TextRegular>
          ))}
        </div>
      </div>
    </TextContainer>
  );
};

export default HeaderDisplay;
