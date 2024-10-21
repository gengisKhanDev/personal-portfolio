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
    setSelectedTitle("Cloud");
    setSelectedIcons(cloudIcons);
  };

  const showDatabase = () => {
    setSelectedTitle("Database");
    setSelectedIcons(databaseIcons);
  };

  const showTools = () => {
    setSelectedTitle("Tools");
    setSelectedIcons(toolsIcons);
  };

  const { t } = useTranslation(); // Hook de traducción

  return (
    <div className="bg-[#13151a] flex flex-col items-center justify-center py-2">
      <Card title={selectedTitle} icons={selectedIcons} />
      <div className="mt-2 flex flex-col space-y-2">
        <button
          onClick={showCloudIcons}
          className="px-4 py-2 text-sm font-medium white-custom bg-transparent border border-[#d4af37] rounded-none hover:bg-[#d4af37] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          {t("sidebards.cloud")}
        </button>
        <button
          onClick={showDatabase}
          className="px-4 py-2 text-sm font-medium white-custom bg-transparent border border-[#d4af37] rounded-none hover:bg-[#d4af37] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          {t("sidebards.database")}
        </button>
        <button
          onClick={showTools}
          className="px-4 py-2 text-sm font-medium white-custom bg-transparent border border-[#d4af37] rounded-none hover:bg-[#d4af37] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          {t("sidebards.tools")}
        </button>
      </div>
    </div>
  );
};

export default CardContainerRight;
