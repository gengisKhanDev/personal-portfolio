import React, { useState } from "react";
import Card from "./Card.jsx";
import { useTranslation } from "react-i18next";

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
    setSelectedTitle("sidebards.languages");
    setSelectedIcons(languajesIcons);
  };

  const showFrontend = () => {
    setSelectedTitle("sidebards.frontend");
    setSelectedIcons(frontendIcons);
  };

  const showBackend = () => {
    setSelectedTitle("sidebards.backend");
    setSelectedIcons(backendIcons);
  };

  const { t } = useTranslation();

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
            onClick={showLanguajes}
            className="relative z-10 w-full text-black bg-[#f8f4e3] hover:bg-opacity-70 focus:z-10 focus:ring-2 dark:text-white"
            style={{
              clipPath:
                "polygon(13% 4%, 87% 4%, 97% 30%, 97% 70%, 87% 96%, 13% 96%, 3% 70%, 3% 30%)", // Ajuste para el botón
              padding: "5px 20px",
            }}
          >
            <span className="relative z-10">{t("sidebards.languages")}</span>
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

          {/* El botón con forma personalizada */}
          <button
            type="button"
            onClick={showFrontend}
            className="relative z-10 w-full text-black bg-[#f8f4e3] hover:bg-opacity-70"
            style={{
              clipPath:
                "polygon(13% 4%, 87% 4%, 97% 30%, 97% 70%, 87% 96%, 13% 96%, 3% 70%, 3% 30%)", // Ajuste para el botón
              padding: "5px 20px",
            }}
          >
            <span className="relative z-10">{t("sidebards.frontend")}</span>
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

          {/* El botón con forma personalizada */}
          <button
            type="button"
            onClick={showBackend}
            className="relative z-10 w-full text-black bg-[#f8f4e3] hover:bg-opacity-70"
            style={{
              clipPath:
                "polygon(13% 4%, 87% 4%, 97% 30%, 97% 70%, 87% 96%, 13% 96%, 3% 70%, 3% 30%)", // Ajuste para el botón
              padding: "5px 20px",
            }}
          >
            <span className="relative z-10">{t("sidebards.backend")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContainerLeft;
