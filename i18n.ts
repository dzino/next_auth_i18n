import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  resources: {
    en: {
      common: {
        name: "Project on Next.js",
        login: "Login",
        logout: "Logout",
        email: "Email",
        password: "Password",
        signIn: "Sign In",
        invalid: "Invalid credentials",
        aboutPage: "About Page",
        welcome: "Welcome",
        welcome_title: "Welcome to Our Project",
        welcome_description:
          "This is a demo project showcasing React with i18next integration.",
        get_started: "Let's start the introduction",
        about0: "A small project made on Next.js.",
        about1: "This project was made as part of a test demo.",
        about2: `Working with translations, authorization for Next, and more are demonstrated here.`,
        home: "Home",
        about: "About",
      },
    },
    ru: {
      common: {
        name: "Проект на Next.js",
        login: "Войти",
        logout: "Выйти",
        email: "Почта",
        password: "Пароль",
        signIn: "Войти",
        invalid: "Неверные учетные данные",
        aboutPage: "О нас",
        welcome: "Добро пожаловать",
        welcome_title: "Добро пожаловать в наш проект",
        welcome_description: "Это демо-проект с интеграцией React и i18next.",
        get_started: "Начнем ознакомление.",
        about0: `Маленький проект, сделанный на Next.js.`,
        about1: `Этот проект сделан в рамках тестовой демки.`,
        about2: `Здесь продемострированна работа с переводами, авторизация на Next и прочее.`,
        home: "Главная",
        about: "О нас",
      },
    },
  },
});

export default i18n;
