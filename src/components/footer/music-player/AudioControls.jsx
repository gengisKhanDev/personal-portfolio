import React from "react";
import { Disco } from "./Disco";

export function AudioControls({
  isPlaying,
  isMuted,
  togglePlayPause,
  nextSong,
  prevSong,
  handleMuteToggle,
}) {
  return (
    <div className="flex flex-col items-center">
      <Disco isPlaying={isPlaying} isMuted={isMuted} />{" "}
      {/* Pasamos también isMuted */}
      <div className="flex pt-2 items-center">
        <button
          onClick={prevSong}
          className="px-4 py-2 text-sm font-medium white-custom bg-transparent border border-[#d4af37] rounded-s-lg hover:bg-[#d4af37] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          disabled={isMuted}
        >
          Prev
        </button>
        <button
          onClick={togglePlayPause}
          class="px-4 py-2 text-sm font-medium white-custom bg-transparent border-t border-b border-[#d4af37] hover:bg-[#d4af37] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          disabled={isMuted}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={nextSong}
          className="px-4 py-2 text-sm font-medium white-custom bg-transparent border border-[#d4af37] rounded-e-lg hover:bg-[#d4af37] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          disabled={isMuted}
        >
          Next
        </button>
      </div>
      {/* <label className="ml-4 flex items-center space-x-2 cursor-pointer relative">
        <input
          type="checkbox"
          className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#d4af37] checked:border-[#d4af37]"
          checked={!isMuted}
          onChange={handleMuteToggle}
        />
        <span className="white-custom">Unmute</span>
      </label> */}
    </div>
  );
}
