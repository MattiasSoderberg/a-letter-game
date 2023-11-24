import { NextIntlClientProvider, useMessages } from "next-intl";
import MainContainer from "../../components/containers/MainContainer";
import Game from "../../components/Game/Game";

export default function GamePage() {
  const messages = useMessages();
  return (
    <MainContainer>
      <NextIntlClientProvider messages={messages}>
        <Game />
      </NextIntlClientProvider>
    </MainContainer>
  );
}
