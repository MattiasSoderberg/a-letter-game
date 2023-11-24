import NewGameForm from "@/app/components/Game/NewGameForm/NewGameForm";
import { H1 } from "@/app/components/Typography";
import MainContainer from "@/app/components/containers/MainContainer";
import TextContainer from "@/app/components/containers/TextContainer";
import { useTranslations } from "next-intl";

export default function NewGame() {
  const t = useTranslations("Game.new_game");
  return (
    <MainContainer>
      <TextContainer>
        <H1>{t("title")}</H1>
      </TextContainer>
      <NewGameForm />
    </MainContainer>
  );
}
