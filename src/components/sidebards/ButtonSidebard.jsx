import React from "react";
import { useTranslation } from "react-i18next";

const ButtonSidebard = ({ handleClick, title }) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full">
      <div
        className="absolute inset-0 z-0"
        style={{
          clipPath:
            "polygon(12% 0, 88% 0, 98% 28%, 98% 72%, 88% 100%, 12% 100%, 2% 72%, 2% 28%)",
          backgroundColor: "#d4af37",
        }}
      ></div>

      <button
        type="button"
        onClick={handleClick}
        className="relative z-10 w-full text-black bg-[#f8f4e3] hover:bg-opacity-70 focus:z-10 focus:ring-2 dark:text-white"
        style={{
          clipPath:
            "polygon(13% 4%, 87% 4%, 97% 30%, 97% 70%, 87% 96%, 13% 96%, 3% 70%, 3% 30%)",
          padding: "5px 20px",
        }}
      >
        <span className="relative z-10">{t(title)}</span>
      </button>
    </div>
  );
};

export default ButtonSidebard;
