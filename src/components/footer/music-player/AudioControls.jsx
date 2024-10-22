import React from "react";
import { Disco } from "./Disco";

export function AudioControls({
  isPlaying,
  isMuted,
  togglePlayPause,
  nextSong,
  prevSong,
}) {
  return (
    <div className="flex flex-col p-0 m-0">
      <Disco isPlaying={isPlaying} isMuted={isMuted} />{" "}
      {/* Pasamos también isMuted */}
      <div className="flex pt-2">
        <button
          onClick={prevSong}
          className="px-4 py-2 text-sm font-medium white-custom bg-transparent border-double border-2 border-[#d4af37] rounded-none hover:bg-[#d4af37] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          disabled={isMuted}
        >
          Prev
        </button>
        <button
          onClick={togglePlayPause}
          className="px-4 py-2 text-sm font-medium white-custom bg-transparent border-double border-2 border-[#d4af37] rounded-none hover:bg-[#d4af37] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          disabled={isMuted}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={nextSong}
          className="px-4 py-2 text-sm font-medium white-custom bg-transparent border-double border-2 border-[#d4af37] rounded-none hover:bg-[#d4af37] hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          disabled={isMuted}
        >
          Next
        </button>
      </div>
    </div>
  );
}
