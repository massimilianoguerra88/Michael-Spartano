import { useLang } from "@/contexts/LanguageContext";
import { it } from "./it";
import { en } from "./en";

export function useT() {
  const { lang } = useLang();
  return lang === 'en' ? en : it;
}
