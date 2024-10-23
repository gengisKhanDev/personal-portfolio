import React, { useState } from "react";
import Card from "./Card.jsx";
import ButtonSidebard from "./ButtonSidebard.jsx";

const cloudIcons = [
  {
    src: "/icons/devops-cloud/amazonwebservices.svg",
    alt: "amazonwebservices",
  },
  { src: "/icons/devops-cloud/cloudflare.svg", alt: "Cloudflare" },
  { src: "/icons/devops-cloud/docker.svg", alt: "Docker" },
  { src: "/icons/devops-cloud/gnubash.svg", alt: "GNU Bash" },
];

const databaseIcons = [
  { src: "/icons/database/mongodb.svg", alt: "MongoDB" },
  { src: "/icons/database/postgresql.svg", alt: "PostgreSQL" },
  { src: "/icons/database/mysql.svg", alt: "MySQL" },
];

const toolsIcons = [
  { src: "/icons/tools/git.svg", alt: "Git" },
  { src: "/icons/tools/postman.svg", alt: "Postman" },
  { src: "/icons/tools/figma.svg", alt: "Figma" },
  { src: "/icons/tools/latex.svg", alt: "LaTeX" },
  { src: "/icons/tools/overleaf.svg", alt: "Overleaf" },
  { src: "/icons/tools/wordpress.svg", alt: "WordPress" },
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
