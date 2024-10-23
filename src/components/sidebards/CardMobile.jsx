import React, { useState } from "react";
import Card from "./Card.jsx";
import ButtonSidebard from "./ButtonSidebard.jsx";

const languajesIcons = [
  { src: "/icons/languajes/javascript.svg", alt: "JavaScript" },
  { src: "/icons/languajes/typescript.svg", alt: "TypeScript" },
  { src: "/icons/languajes/kotlin.svg", alt: "Kotlin" },
  { src: "/icons/languajes/java.svg", alt: "Java" },
  { src: "/icons/languajes/pyton.svg", alt: "Python" },
];

const frontendIcons = [
  { src: "/icons/frontend/html5.svg", alt: "HTML5" },
  { src: "/icons/frontend/css3.svg", alt: "CSS3" },
  { src: "/icons/frontend/backblaze.svg", alt: "BlazeJS" },
  { src: "/icons/frontend/react.svg", alt: "React" },
  { src: "/icons/frontend/astro.svg", alt: "Astro" },
  { src: "/icons/frontend/jquery.svg", alt: "JQuery" },
  { src: "/icons/frontend/tailwindcss.svg", alt: "Tailwind" },
  { src: "/icons/frontend/bootstrap.svg", alt: "Bootstrap" },
];

const backendIcons = [
  { src: "/icons/backend/node.js.svg", alt: "NodeJS" },
  { src: "/icons/backend/meteor.svg", alt: "Meteor" },
  { src: "/icons/backend/express.svg", alt: "Express" },
  { src: "/icons/backend/firebase.svg", alt: "Firebase" },
  { src: "/icons/backend/spring.svg", alt: "Spring Boot" },
];

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
