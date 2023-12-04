import React from "react";
import TextContainer from "../containers/TextContainer";
import { H2, TextLarge, TextRegular } from "../Typography";
import { useTranslations } from "next-intl";

interface Props {
  categories: { value: string }[];
}

const Categories = ({ categories }: Props) => {
  const t = useTranslations("Game");
  return (
    <TextContainer>
      <H2>{t("categories_title")}</H2>
      <div className="w-full flex flex-wrap gap-x-8 gap-y-2 justify-between">
        {categories.map((category) => (
          <TextRegular>{category.value}</TextRegular>
        ))}
      </div>
    </TextContainer>
  );
};

export default Categories;
