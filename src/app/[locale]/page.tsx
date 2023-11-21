import { useTranslations } from "next-intl";
import { H1, H2, TextRegular } from "./components/Typography";
import MainContainer from "./components/containers/MainContainer";
import TextContainer from "./components/containers/TextContainer";
import ButtonStandard from "./components/Button/variants/ButtonStandard";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <MainContainer>
      <TextContainer>
        <H1>{t("title")}</H1>
        <H2>{t("subtitle")}</H2>
      </TextContainer>
      <TextContainer>
        <TextRegular>{t("message")}</TextRegular>
      </TextContainer>
      <div className="w-full h-fit flex flex-col gap-6 mt-10">
        <ButtonStandard>{t("new_game_button_text")}</ButtonStandard>
        <ButtonStandard background="secondLight">
          {t("rules_button_text")}
        </ButtonStandard>
      </div>
    </MainContainer>
  );
}
