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
];

const CardContainerLeft = () => {
  const [selectedTitle, setSelectedTitle] = useState("sidebards.languages");
  const [selectedIcons, setSelectedIcons] = useState(languajesIcons);

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

export default CardContainerLeft;
