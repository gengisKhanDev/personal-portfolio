import React, { useState } from "react";
import Card from "./Card.jsx";
import { useTranslation } from "react-i18next";

const cloudIcons = [
  {
    src: "/icons/devops-cloud/amazonwebservices.svg",
    alt: "amazonwebservices",
  },
  { src: "/icons/devops-cloud/cloudflare.svg", alt: "cloudflare" },
  { src: "/icons/devops-cloud/docker.svg", alt: "docker" },
  { src: "/icons/devops-cloud/gnubash.svg", alt: "gnubash" },
];

const databaseIcons = [
  { src: "/icons/database/mongodb.svg", alt: "mongodb" },
  { src: "/icons/database/postgresql.svg", alt: "postgresql" },
  { src: "/icons/database/mysql.svg", alt: "mysql" },
];

const toolsIcons = [
  { src: "/icons/tools/git.svg", alt: "git" },
  { src: "/icons/tools/postman.svg", alt: "postman" },
  { src: "/icons/tools/figma.svg", alt: "figma" },
  { src: "/icons/tools/latex.svg", alt: "latex" },
  { src: "/icons/tools/overleaf.svg", alt: "overleaf" },
];

const CardContainerRight = () => {
  const [selectedTitle, setSelectedTitle] = useState("Cloud");
  const [selectedIcons, setSelectedIcons] = useState(cloudIcons);

  const showCloudIcons = () => {
    setSelectedTitle("sidebards.cloud");
    setSelectedIcons(cloudIcons);
  };

  const showDatabase = () => {
    setSelectedTitle("sidebards.database");
    setSelectedIcons(databaseIcons);
  };

  const showTools = () => {
    setSelectedTitle("sidebards.tools");
    setSelectedIcons(toolsIcons);
  };

  const { t } = useTranslation(); // Hook de traducción

  return (
    <div className="bg-[#13151a] flex flex-col items-center justify-center py-2">
      <Card title={selectedTitle} icons={selectedIcons} />
      <div className="mt-2 flex flex-col space-y-2 w-full">
        <div className="relative w-full">
          {/* El contenedor para el borde */}
          <div
            className="absolute inset-0 z-0"
            style={{
              clipPath:
                "polygon(12% 0, 88% 0, 98% 28%, 98% 72%, 88% 100%, 12% 100%, 2% 72%, 2% 28%)", // Ajuste balanceado
              backgroundColor: "#d4af37", // Borde rojo
            }}
          ></div>

          <button
            type="button"
            onClick={showCloudIcons}
            className="relative z-10 w-full text-black bg-[#f8f4e3] hover:bg-opacity-70 focus:z-10 focus:ring-2 dark:text-white"
            style={{
              clipPath:
                "polygon(13% 4%, 87% 4%, 97% 30%, 97% 70%, 87% 96%, 13% 96%, 3% 70%, 3% 30%)", // Ajuste para el botón
              padding: "5px 20px",
            }}
          >
            <span className="relative z-10">{t("sidebards.cloud")}</span>
          </button>
        </div>
        <div className="relative w-full">
          {/* El contenedor para el borde */}
          <div
            className="absolute inset-0 z-0"
            style={{
              clipPath:
                "polygon(12% 0, 88% 0, 98% 28%, 98% 72%, 88% 100%, 12% 100%, 2% 72%, 2% 28%)", // Ajuste balanceado
              backgroundColor: "#d4af37", // Borde rojo
            }}
          ></div>

          <button
            type="button"
            onClick={showDatabase}
            className="relative z-10 w-full text-black bg-[#f8f4e3] hover:bg-opacity-70 focus:z-10 focus:ring-2 dark:text-white"
            style={{
              clipPath:
                "polygon(13% 4%, 87% 4%, 97% 30%, 97% 70%, 87% 96%, 13% 96%, 3% 70%, 3% 30%)", // Ajuste para el botón
              padding: "5px 20px",
            }}
          >
            <span className="relative z-10">{t("sidebards.database")}</span>
          </button>
        </div>
        <div className="relative w-full">
          {/* El contenedor para el borde */}
          <div
            className="absolute inset-0 z-0"
            style={{
              clipPath:
                "polygon(12% 0, 88% 0, 98% 28%, 98% 72%, 88% 100%, 12% 100%, 2% 72%, 2% 28%)", // Ajuste balanceado
              backgroundColor: "#d4af37", // Borde rojo
            }}
          ></div>

          <button
            type="button"
            onClick={showTools}
            className="relative z-10 w-full text-black bg-[#f8f4e3] hover:bg-opacity-70 focus:z-10 focus:ring-2 dark:text-white"
            style={{
              clipPath:
                "polygon(13% 4%, 87% 4%, 97% 30%, 97% 70%, 87% 96%, 13% 96%, 3% 70%, 3% 30%)", // Ajuste para el botón
              padding: "5px 20px",
            }}
          >
            <span className="relative z-10">{t("sidebards.tools")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContainerRight;
