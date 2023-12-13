import { useTranslations } from "next-intl";
import { H1, TextRegular } from "../../components/Typography";
import MainContainer from "../../components/containers/MainContainer";
import TextContainer from "../../components/containers/TextContainer";

export default function Rules() {
  const t = useTranslations("Rules");

  return (
    <MainContainer>
      <TextContainer>
        <H1>{t("title")}</H1>
        <TextRegular>{t("introduction")}</TextRegular>
        <TextRegular>{t("content")}</TextRegular>
        <TextRegular>{t("ending")}</TextRegular>
      </TextContainer>
    </MainContainer>
  );
}
