import { defaultLanguage } from "./common";

export const getTranslation = <T extends Record<string, Record<string, any>>>(
  translations: T,
  lang: string,
  fallback: string = defaultLanguage
) => {
  return (translations[lang] ?? translations[fallback]) as T[keyof T];
};
