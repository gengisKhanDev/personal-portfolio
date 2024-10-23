import React, { useState } from "react";
import Card from "./Card.jsx";
import ButtonSidebard from "./ButtonSidebard.jsx";

const languajesIcons = [
  { src: "/icons/languajes/javascript.svg", alt: "javascript" },
  { src: "/icons/languajes/typescript.svg", alt: "typescript" },
  { src: "/icons/languajes/kotlin.svg", alt: "kotlin" },
  { src: "/icons/languajes/java.svg", alt: "java" },
  { src: "/icons/languajes/pyton.svg", alt: "pyton" },
];

const frontendIcons = [
  { src: "/icons/frontend/html5.svg", alt: "html5" },
  { src: "/icons/frontend/css3.svg", alt: "css3" },
  { src: "/icons/frontend/backblaze.svg", alt: "backblaze" },
  { src: "/icons/frontend/react.svg", alt: "react" },
  { src: "/icons/frontend/astro.svg", alt: "astro" },
  { src: "/icons/frontend/jquery.svg", alt: "jquery" },
  { src: "/icons/frontend/tailwindcss.svg", alt: "tailwindcss" },
  { src: "/icons/frontend/bootstrap.svg", alt: "bootstrap" },
];

const backendIcons = [
  { src: "/icons/backend/node.js.svg", alt: "node.js" },
  { src: "/icons/backend/meteor.svg", alt: "meteor" },
  { src: "/icons/backend/express.svg", alt: "express" },
  { src: "/icons/backend/firebase.svg", alt: "firebase" },
  { src: "/icons/backend/spring.svg", alt: "spring" },
];

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
    title: "sidebards.languages",
    handleClick: (setSelectedTitle, setSelectedIcons) => {
      setSelectedTitle("sidebards.languages");
      setSelectedIcons(languajesIcons);
    },
  },
  {
    title: "sidebards.frontend",
    handleClick: (setSelectedTitle, setSelectedIcons) => {
      setSelectedTitle("sidebards.frontend");
      setSelectedIcons(frontendIcons);
    },
  },
  {
    title: "sidebards.backend",
    handleClick: (setSelectedTitle, setSelectedIcons) => {
      setSelectedTitle("sidebards.backend");
      setSelectedIcons(backendIcons);
    },
  },
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

const CardMobile = () => {
  const [selectedTitle, setSelectedTitle] = useState("sidebards.languages");
  const [selectedIcons, setSelectedIcons] = useState(languajesIcons);

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Card title={selectedTitle} icons={selectedIcons} />

      <div className="mt-2 flex flex-wrap justify-between w-full">
        {buttonConfigs.map((config, index) => (
          <div key={index} className="w-1/2 p-1 flex justify-center">
            <ButtonSidebard
              title={config.title}
              handleClick={() =>
                config.handleClick(setSelectedTitle, setSelectedIcons)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMobile;
