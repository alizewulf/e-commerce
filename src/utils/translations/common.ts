export const supportedLanguages = ["en", "ru", "pl", "de", "ge"] as const;

export type LanguageCode = typeof supportedLanguages[number];

export const defaultLanguage: LanguageCode = "en";

export const commonTranslations = {
  en: {
    shopNow: "Shop Now",
    emailPlaceholder: "Email or Phone Number",
    passwordPlaceholder: "Password",
  },
  ru: {
    shopNow: "Купить",
    emailPlaceholder: "Email или номер телефона",
    passwordPlaceholder: "Пароль",
  },
  pl: {
    shopNow: "Kup teraz",
    emailPlaceholder: "E-mail lub numer telefonu",
    passwordPlaceholder: "Hasło",
  },
  de: {
    shopNow: "Jetzt kaufen",
    emailPlaceholder: "E-Mail oder Telefonnummer",
    passwordPlaceholder: "Passwort",
  },
  ge: {
    shopNow: "იყიდე ახლა",
    emailPlaceholder: "ელფოსტა ან ტელეფონის ნომერი",
    passwordPlaceholder: "პაროლი",
  },
} as const;
