import { localeNames, locales, usePathname, useRouter } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { TextLarge } from "../Typography";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();
  const t = useTranslations("Navigation");

  const onOptionClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathName, { locale: e.target.value });
  };

  return (
    <div className="w-max h-full flex flex-col gap-2">
      <label>
        <TextLarge>{t("language")}</TextLarge>
      </label>
      <select
        value={locale}
        onChange={onOptionClick}
        className="w-max p-1  outline-firstDark border border-1 border-firstLight rounded relative"
      >
        {locales.map((lang) => (
          <option key={lang} value={lang}>
            {localeNames[lang]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
