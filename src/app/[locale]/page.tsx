import { useTranslations } from "next-intl";
import { H1 } from "./components/Typography";
import MainContainer from "./components/containers/MainContainer";

export default function Home() {
  const t = useTranslations("Index");
  return <MainContainer>{/* <H1>{t("title")}</H1> */}</MainContainer>;
}
