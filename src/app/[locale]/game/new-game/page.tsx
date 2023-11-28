import NewGameForm from "@/app/components/Game/NewGameForm/NewGameForm";
import { H1 } from "@/app/components/Typography";
import MainContainer from "@/app/components/containers/MainContainer";
import TextContainer from "@/app/components/containers/TextContainer";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";

export default function NewGame() {
  const t = useTranslations("Game.new_game");
  const messages = useMessages();

  return (
    <MainContainer>
      <TextContainer>
        <H1>{t("title")}</H1>
      </TextContainer>
      <NextIntlClientProvider messages={messages}>
        <NewGameForm />
      </NextIntlClientProvider>
    </MainContainer>
  );
}
