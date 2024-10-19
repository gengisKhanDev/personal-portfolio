import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";

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

const CardContainerLeft = () => {
  const [selectedTitle, setSelectedTitle] = useState("Languajes");
  const [selectedIcons, setSelectedIcons] = useState(languajesIcons);

  const showLanguajes = () => {
    setSelectedTitle("Languajes");
    setSelectedIcons(languajesIcons);
  };

  const showFrontend = () => {
    setSelectedTitle("Frontend");
    setSelectedIcons(frontendIcons);
  };

  const showBackend = () => {
    setSelectedTitle("Backend");
    setSelectedIcons(backendIcons);
  };

  return (
    <div className="bg-[#13151a] min-h-screen flex flex-col items-center justify-center">
      <Card title={selectedTitle} icons={selectedIcons} />
      <div className="mt-6 flex flex-col space-y-4">
        <button
          onClick={showLanguajes}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          Languajes
        </button>
        <button
          onClick={showFrontend}
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600"
        >
          Frontend
        </button>
        <button
          onClick={showBackend}
          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600"
        >
          Backend
        </button>
      </div>
    </div>
  );
};

export default CardContainerLeft;
