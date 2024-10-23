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
