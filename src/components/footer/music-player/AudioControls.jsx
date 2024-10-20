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
      <Disco className="mb-4" isPlaying={isPlaying} isMuted={isMuted} />{" "}
      {/* Pasamos también isMuted */}
      <div className="flex items-center space-x-4">
        <button
          onClick={prevSong}
          className="px-4 py-2 bg-green-500 text-white rounded"
          disabled={isMuted}
        >
          Prev
        </button>
        <button
          onClick={togglePlayPause}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          disabled={isMuted}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={nextSong}
          className="px-4 py-2 bg-green-500 text-white rounded"
          disabled={isMuted}
        >
          Next
        </button>
      </div>
      <label className="ml-4 flex items-center space-x-2 cursor-pointer relative">
        <input
          type="checkbox"
          className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#d4af37] checked:border-[#d4af37]"
          checked={!isMuted}
          onChange={handleMuteToggle}
        />
        <span>Mute</span>
      </label>
    </div>
  );
}
