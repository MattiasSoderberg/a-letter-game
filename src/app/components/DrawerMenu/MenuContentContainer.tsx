"use client";
import React from "react";
import useMenu from "@/hooks/useMenu";
import { motion } from "framer-motion";
import { Link } from "@/navigation";
import { TextRegular } from "../Typography";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { useAppContext } from "@/context/AppContext";

const MenuContentContainer = () => {
  const { closeMenu } = useMenu();
  const { isMenuOpen } = useAppContext();
  const t = useTranslations("Navigation");

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={isMenuOpen ? { x: 0 } : { x: "100%" }}
      transition={{ type: "spring", stiffness: 130, damping: 20 }}
      className={`w-full h-full absolute z-50`}
    >
      <div className="w-full h-full flex flex-col gap-10 bg-lightMain p-10">
        <ul className="w-full h-max flex flex-col items-start gap-8">
          <li className="w-full flex flex-col gap-2">
            <Link href="/about" onClick={closeMenu}>
              <TextRegular>{t("about")}</TextRegular>
            </Link>
            <div className="w-full h-[1px] bg-firstDark" />
          </li>
          <li className="w-full flex flex-col gap-2">
            <Link href="/rules" onClick={closeMenu}>
              <TextRegular>{t("rules")}</TextRegular>
            </Link>
            <div className="w-full h-[1px] bg-firstDark" />
          </li>
          <li className="w-full flex flex-col gap-2">
            <Link href="/game" onClick={closeMenu}>
              <TextRegular>{t("play")}</TextRegular>
            </Link>
            <div className="w-full h-[1px] bg-firstDark" />
          </li>
        </ul>
        <LanguageSwitcher />
      </div>
    </motion.div>
  );
};

export default MenuContentContainer;
