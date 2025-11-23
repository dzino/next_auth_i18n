"use client";

import { useTranslation } from "react-i18next";

export default function LangSwitcherClient() {
  const { i18n } = useTranslation("common");

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="cursor-pointer"
        style={i18n.language == "ru" ? { color: "red" } : {}}
        onClick={() => changeLang("ru")}
      >
        RU
      </button>
      <button
        className="cursor-pointer"
        style={i18n.language == "en" ? { color: "red" } : {}}
        onClick={() => changeLang("en")}
      >
        EN
      </button>
    </div>
  );
}
