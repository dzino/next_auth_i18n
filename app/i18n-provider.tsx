"use client";

import "../i18n";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function I18nProvider({ children }) {
  const { i18n } = useTranslation("common");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    if (savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang).then(() => setReady(true));
    } else {
      setReady(true);
    }
  }, [i18n]);

  if (!ready) return null;

  return children;
}
