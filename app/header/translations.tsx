"use client";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

export const Name = () => {
  const { t } = useTranslation("common");
  return <h1 className="text-2xl">{t("name")}</h1>;
};

export const Logout = () => {
  const { t } = useTranslation("common");
  return <p>{t("logout")}</p>;
};

export const Login = () => {
  const { t } = useTranslation("common");
  return <p>{t("login")}</p>;
};

export const Home = () => {
  const { t } = useTranslation("common");
  const pathname = usePathname();
  const isActive = useMemo(() => pathname === "/", [pathname]);
  return (
    <h2 className={isActive ? "text-red-600" : "text-gray-300"}>{t("home")}</h2>
  );
};

export const About = () => {
  const { t } = useTranslation("common");
  const pathname = usePathname();
  const isActive = useMemo(() => pathname === "/about", [pathname]);
  return (
    <h2 className={isActive ? "text-red-600" : "text-gray-300"}>
      {t("about")}
    </h2>
  );
};
