import { useTranslations } from "next-intl";
import { H1, H2, TextRegular } from "../components/Typography";
import MainContainer from "../components/containers/MainContainer";
import TextContainer from "../components/containers/TextContainer";
import ButtonStandard from "../components/Button/variants/ButtonStandard";
import LinkButton from "../components/Link/LinkButton";

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
        <LinkButton href={t("links.new_game.href") as any}>
          {t("links.new_game.text")}
        </LinkButton>
        <LinkButton
          href={t("links.rules.href") as any}
          background="secondLight"
        >
          {t("links.rules.text")}
        </LinkButton>
      </div>
    </MainContainer>
  );
}
