import { useTranslations } from "next-intl";
import { H1 } from "../../components/Typography";
import MainContainer from "../../components/containers/MainContainer";
import TextContainer from "../../components/containers/TextContainer";

export default function Rules() {
  const t = useTranslations("Rules");

  return (
    <MainContainer>
      <TextContainer>
        <H1>{t("title")}</H1>
      </TextContainer>
    </MainContainer>
  );
}
