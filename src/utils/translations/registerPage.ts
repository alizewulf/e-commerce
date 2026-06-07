import { commonTranslations } from "./common";

export const registerTranslation = {
  en: {
    content: {
      signupTitle: "Create an account",
      signupSubtitle: "Enter your details below",
      namePlaceholder: "Name",
      alreadyHaveAccount: "Already have account?",
      loginLink: "Log in",
      signUpWithGoogle: "Sign up with Google",
      emailPlaceholder: commonTranslations.en.emailPlaceholder,
      passwordPlaceholder: commonTranslations.en.passwordPlaceholder,
    },
    actions: {
      createAccountButton: "Create Account",
    },
  },
  ru: {
    content: {
      signupTitle: "Создать аккаунт",
      signupSubtitle: "Введите свои данные ниже",
      namePlaceholder: "Имя",
      alreadyHaveAccount: "Уже есть аккаунт?",
      loginLink: "Войти",
      signUpWithGoogle: "Регистрация через Google",
      emailPlaceholder: commonTranslations.ru.emailPlaceholder,
      passwordPlaceholder: commonTranslations.ru.passwordPlaceholder,
    },
    actions: {
      createAccountButton: "Создать аккаунт",
    },
  },
  pl: {
    content: {
      signupTitle: "Stwórz konto",
      signupSubtitle: "Wprowadź swoje dane poniżej",
      namePlaceholder: "Imię",
      alreadyHaveAccount: "Masz już konto?",
      loginLink: "Zaloguj się",
      signUpWithGoogle: "Zarejestruj się przez Google",
      emailPlaceholder: commonTranslations.pl.emailPlaceholder,
      passwordPlaceholder: commonTranslations.pl.passwordPlaceholder,
    },
    actions: {
      createAccountButton: "Stwórz konto",
    },
  },
  de: {
    content: {
      signupTitle: "Konto erstellen",
      signupSubtitle: "Gib unten deine Daten ein",
      namePlaceholder: "Name",
      alreadyHaveAccount: "Hast du bereits ein Konto?",
      loginLink: "Anmelden",
      signUpWithGoogle: "Mit Google registrieren",
      emailPlaceholder: commonTranslations.de.emailPlaceholder,
      passwordPlaceholder: commonTranslations.de.passwordPlaceholder,
    },
    actions: {
      createAccountButton: "Konto erstellen",
    },
  },
  ge: {
    content: {
      alreadyHaveAccount: "უკვე გაქვთ ანგარიში?",
      signupTitle: "ანგარიშის შექმნა",
      signupSubtitle: "შეიყვანეთ თქვენი მონაცემები ქვემოთ",
      namePlaceholder: "სახელი",
      loginLink: "შესვლა",
      signUpWithGoogle: "Google-ით რეგისტრაცია",
      emailPlaceholder: commonTranslations.ge.emailPlaceholder,
      passwordPlaceholder: commonTranslations.ge.passwordPlaceholder,
    },
    actions: {
      createAccountButton: "ანგარიშის შექმნა",
    },
  },
} as const;
