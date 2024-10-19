import React from "react";
import "./Disco.css"; // Importa el CSS personalizado para el disco

export function Disco() {
  return (
    <div className="disco-container relative w-40">
      <div class="record"></div>
      <div class="record-center"></div>
      <div class="record-ring-1"></div>
      <div class="record-ring-2"></div>
    </div>
  );
}
