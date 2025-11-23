"use client";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-zinc-50 dark:bg-[#0a0a0a] font-sans py-16 px-4 sm:px-8">
      <main className="mx-auto w-full max-w-3xl flex flex-col sm:items-start gap-4">
        <section className="max-w-2xl sm:text-left">
          <h1 className="text-4xl font-bold">{t("welcome_title")}</h1>
          <p className="mt-4 text-lg">{t("welcome_description")}</p>
          <p className="mt-2 text-base">{t("get_started")}</p>
        </section>
      </main>
    </div>
  );
}
