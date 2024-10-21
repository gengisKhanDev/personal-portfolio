// src/LanguageSwitcher.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-4 m-0 flex flex-col items-center">
      <h2 className="white-custom p-2">{t("footer.languages")}</h2>
      <div className="inline-flex rounded-none shadow-sm" role="group">
        <button
          type="button"
          onClick={() => changeLanguage("en")}
          className="px-4 py-2 text-sm font-medium white-custom bg-transparent border border-[#d4af37] rounded-none hover:bg-[#d4af37] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          {t("footer.english")}
        </button>
        <button
          type="button"
          onClick={() => changeLanguage("es")}
          className="px-4 py-2 text-sm font-medium white-custom bg-transparent border border-[#d4af37] rounded-none hover:bg-[#d4af37] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          {t("footer.spanish")}
        </button>
      </div>
    </div>
  );
}
