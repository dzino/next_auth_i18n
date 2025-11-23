"use client";

import { useTranslation } from "react-i18next";

const Content = ({ email }) => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-zinc-50 dark:bg-[#0a0a0a] font-sans py-16 px-4 sm:px-8">
      <main className="mx-auto w-full max-w-3xl flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{t("aboutPage")}</h1>
        <p className="text-lg">
          {t("welcome")}, {email}!
        </p>
        <p className="text-base">{t("about0")}</p>
        <p className="text-base">{t("about1")}</p>
        <p className="text-base">{t("about2")}</p>
      </main>
    </div>
  );
};

export default Content;
