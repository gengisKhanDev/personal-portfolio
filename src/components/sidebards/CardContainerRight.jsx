import React, { useState } from "react";
import Card from "./Card.jsx";
import ButtonSidebard from "./ButtonSidebard.jsx";

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

const buttonConfigs = [
  {
    title: "sidebards.cloud",
    handleClick: (setSelectedTitle, setSelectedIcons) => {
      setSelectedTitle("sidebards.cloud");
      setSelectedIcons(cloudIcons);
    },
  },
  {
    title: "sidebards.database",
    handleClick: (setSelectedTitle, setSelectedIcons) => {
      setSelectedTitle("sidebards.database");
      setSelectedIcons(databaseIcons);
    },
  },
  {
    title: "sidebards.tools",
    handleClick: (setSelectedTitle, setSelectedIcons) => {
      setSelectedTitle("sidebards.tools");
      setSelectedIcons(toolsIcons);
    },
  },
];

const CardContainerRight = () => {
  const [selectedTitle, setSelectedTitle] = useState("sidebards.cloud");
  const [selectedIcons, setSelectedIcons] = useState(cloudIcons);

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Card title={selectedTitle} icons={selectedIcons} />

      <div className="mt-2 flex flex-col space-y-2 w-full">
        {buttonConfigs.map((config, index) => (
          <ButtonSidebard
            key={index}
            title={config.title}
            handleClick={() =>
              config.handleClick(setSelectedTitle, setSelectedIcons)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainerRight;
