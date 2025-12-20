import { en } from "./translations/en";
import { ru } from "./translations/ru";
import { fa } from "./translations/fa";
import { ky } from "./translations/ky";

export type Language = "en" | "ru" | "fa" | "ky";

export const translations = {
  en,
  ru,
  fa,
  ky,
} as const;

export type Translations = typeof en;

export const getTranslation = (lang: Language): Translations => {
  return translations[lang];
};

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "ru", name: "Russian", nativeName: "Русский" },
  { code: "fa", name: "Farsi", nativeName: "فارسی" },
  { code: "ky", name: "Kyrgyz", nativeName: "Кыргызча" },
];
