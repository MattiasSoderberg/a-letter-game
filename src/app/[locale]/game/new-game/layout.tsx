import { H1 } from "@/app/components/Typography";
import MainContainer from "@/app/components/containers/MainContainer";
import TextContainer from "@/app/components/containers/TextContainer";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("Game.new_game");
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <MainContainer>
        <TextContainer shadowColor="secondLighter">
          <H1>{t("title")}</H1>
        </TextContainer>
        {children}
      </MainContainer>
    </NextIntlClientProvider>
  );
}
