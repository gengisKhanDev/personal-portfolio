import React from "react";
import "./Disco.css"; // Importa el CSS personalizado para el disco

export function Disco({ isPlaying, isMuted }) {  // También recibimos el estado de mute
  return (
    <div className={`disco-container relative w-40 ${isPlaying && !isMuted ? "spin" : ""} left-12`}>
      {/* El disco solo gira si no está muteado y está en reproducción */}
      <div className="record"></div>
      <div className="record-center"></div>
      <div className="record-ring-1"></div>
      <div className="record-ring-2"></div>
    </div>
  );
}
