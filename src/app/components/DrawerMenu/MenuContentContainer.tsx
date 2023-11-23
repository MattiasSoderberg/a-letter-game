"use client";
import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "@/context/AppContext";
import useMenu from "@/hooks/useMenu";
import { Link } from "@/navigation";
import { TextRegular } from "../Typography";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

const MenuContentContainer = () => {
  const { isMenuOpen } = useAppContext();
  const { closeMenu } = useMenu();
  const t = useTranslations("Navigation");

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={isMenuOpen ? { x: 0 } : { x: "100%" }}
      transition={{ type: "spring", stiffness: 130, damping: 20 }}
      className="w-full h-full flex flex-col gap-10 bg-lightMain absolute z-50 p-10"
    >
      <ul className="w-full flex flex-col items-start gap-8">
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
    </motion.div>
  );
};

export default MenuContentContainer;
