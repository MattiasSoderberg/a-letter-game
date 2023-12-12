"use client";
import React, { useEffect, useState } from "react";
import PlayersForm from "./PlayersForm";
import { Player, useAppContext } from "@/context/AppContext";
import { useRouter } from "@/navigation";
import SettingsForm from "./SettingsForm";
import { GameSettings } from "@/gameConfig";
import TextContainer from "../../containers/TextContainer";
import { useTranslations } from "next-intl";
import { TextRegular } from "../../Typography";

const NewGameForm = () => {
  const router = useRouter();
  const t = useTranslations("Utils");

  useEffect(() => {
    router.push("/game/new-game/settings");
  }, []);

  return (
    <TextContainer>
      <TextRegular>{t("loading")}...</TextRegular>
    </TextContainer>
  );
};

export default NewGameForm;
