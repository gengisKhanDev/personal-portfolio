import React from "react";

export function AudioSettings({ isMuted, handleMuteToggle }) {
  return (
    <div className="flex flex-col items-start">
      {/* Unmute Checkbox */}
      <label className="flex items-center space-x-2 cursor-pointer relative">
        <input
          type="checkbox"
          className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-[#f8f4e3] checked:bg-[#d4af37] checked:border-[#d4af37]"
          checked={!isMuted}
          onChange={handleMuteToggle}
        />
        <span className="white-custom">Unmute</span>
      </label>

      {/* Animation Checkbox */}
      <label className="flex items-center space-x-2 cursor-pointer relative mt-2">
        <input
          type="checkbox"
          className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-[#f8f4e3]"
          // Añadir funcionalidad para el checkbox más tarde si es necesario
        />
        <span className="white-custom">Animation</span>
      </label>
    </div>
  );
}
