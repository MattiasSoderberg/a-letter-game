import { useTranslations } from "next-intl";
import { H1 } from "../../components/Typography";
import MainContainer from "../../components/containers/MainContainer";
import TextContainer from "../../components/containers/TextContainer";

export default function About({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("About");
  return (
    <MainContainer>
      <TextContainer>
        <H1>{t("title")}</H1>
      </TextContainer>
    </MainContainer>
  );
}
