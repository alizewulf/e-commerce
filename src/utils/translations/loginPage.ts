import { commonTranslations } from "./common";

export const loginTranslations = {
  en: {
    content: {
      loginTitle: "Log in to Exclusive",
      loginSubtitle: "Enter your details below",
      emailPlaceholder: commonTranslations.en.emailPlaceholder,
      passwordPlaceholder: commonTranslations.en.passwordPlaceholder,
      forgotPassword: "Forget Password?",
    },
    actions: {
      loginButton: "Log In",
    },
  },
  ru: {
    content: {
      loginTitle: "Войти в Exclusive",
      loginSubtitle: "Введите свои данные ниже",
      emailPlaceholder: commonTranslations.ru.emailPlaceholder,
      passwordPlaceholder: commonTranslations.ru.passwordPlaceholder,
      forgotPassword: "Забыли пароль?",
    },
    actions: {
      loginButton: "Войти",
    },
  },
  pl: {
    content: {
      loginTitle: "Zaloguj się do Exclusive",
      loginSubtitle: "Wprowadź swoje dane poniżej",
      emailPlaceholder: commonTranslations.pl.emailPlaceholder,
      passwordPlaceholder: commonTranslations.pl.passwordPlaceholder,
      forgotPassword: "Zapomniałeś hasła?",
    },
    actions: {
      loginButton: "Zaloguj się",
    },
  },
  de: {
    content: {
      loginTitle: "Bei Exclusive anmelden",
      loginSubtitle: "Gib unten deine Daten ein",
      emailPlaceholder: commonTranslations.de.emailPlaceholder,
      passwordPlaceholder: commonTranslations.de.passwordPlaceholder,
      forgotPassword: "Passwort vergessen?",
    },
    actions: {
      loginButton: "Anmelden",
    },
  },
  ge: {
    content: {
      loginTitle: "შესვლა Exclusive-ში",
      loginSubtitle: "შეიყვანეთ თქვენი მონაცემები ქვემოთ",
      emailPlaceholder: commonTranslations.ge.emailPlaceholder,
      passwordPlaceholder: commonTranslations.ge.passwordPlaceholder,
      forgotPassword: "დაგავიწყდათ პაროლი?",
    },
    actions: {
      loginButton: "შესვლა",
    },
  },
} as const;
