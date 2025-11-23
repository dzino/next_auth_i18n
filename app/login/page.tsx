"use client";

import { useTranslation } from "react-i18next";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const { t } = useTranslation("common");

  return (
    <div className="max-w-[360px] mx-auto my-20 p-5 border border-gray-300 rounded-lg font-sans">
      <h2 className="mb-5">{t("login")}</h2>
      {error && <p className="text-red-500">{t("invalid")}</p>}
      <form action="/api/login" method="POST">
        <input
          className="w-full p-2 my-2 mb-4 border border-gray-300 rounded"
          type="email"
          name="email"
          placeholder={t("email")}
          required
        />
        <input
          className="w-full p-2 my-2 mb-4 border border-gray-300 rounded"
          type="password"
          name="password"
          placeholder={t("password")}
          required
        />
        <button
          className="w-full py-2.5 border-none rounded bg-black text-white cursor-pointer"
          type="submit"
        >
          {t("signIn")}
        </button>
      </form>
    </div>
  );
}
