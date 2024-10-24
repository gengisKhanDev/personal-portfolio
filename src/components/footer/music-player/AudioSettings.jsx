import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./NotesMusicals.css"; // Importa el CSS personalizado para el disco

export function AudioSettings({ isMuted, handleMuteToggle }) {
  const { t } = useTranslation();

  // Estado para controlar si la animación de notas está activada
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  // Función para manejar el cambio del checkbox de animación
  const handleAnimationToggle = () => {
    setIsAnimationActive(!isAnimationActive);
  };

  return (
    <div className="flex flex-col pr-4 items-start">
      <label className="flex items-center space-x-2 cursor-pointer relative mt-2">
        <input
          type="checkbox"
          className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-[#f8f4e3] checked:bg-[#d4af37] checked:border-[#d4af37]"
          checked={isAnimationActive}
          onChange={handleAnimationToggle}
        />
        <span className="white-custom">{t("footer.animation")}</span>
      </label>

      {isAnimationActive && (
        <div class="muzieknootjes">
          <div class="noot-1">&#9835; &#9833;</div>
          <div class="noot-2">&#9833;</div>
          <div class="noot-3">&#9839; &#9834;</div>
          <div class="noot-4">&#9834;</div>
          <div class="noot-5">&#9835; &#9834;</div>
          <div class="noot-6">&#9833; &#9835;</div>
          <div class="noot-7">&#9839; &#9834;</div>
          <div class="noot-8">&#9833;</div>
        </div>
      )}
    </div>
  );
}
