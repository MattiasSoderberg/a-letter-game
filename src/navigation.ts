import {
  Pathnames,
  createLocalizedPathnamesNavigation,
} from "next-intl/navigation";

export type Locale = "sv" | "en";

export const locales = ["sv", "en"] as const;
export const localeNames: Record<Locale, string> = {
  sv: "Svenska",
  en: "English",
};

export const pathnames = {
  "/": "/",
  "/about": {
    sv: "/om",
    en: "/about",
  },
  "/rules": {
    sv: "/regler",
    en: "/rules",
  },
  "/game": {
    sv: "/spel",
    en: "/game",
  },
  "/game/new-game": {
    sv: "/spel/nytt-spel",
    en: "/game/new-game",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
