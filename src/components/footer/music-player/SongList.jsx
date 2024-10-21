import React from "react";

export function SongList({ songs, currentSongIndex, handleSongSelect }) {
  return (
    <div className="ml-4">
      <ul>
        {songs.map((song, index) => (
          <li
            key={index}
            className={`cursor-pointer ${index === currentSongIndex ? 'font-bold text-[#d4af37]' : 'white-custom'} hover:border-b-2 hover:border-b-[#d4af37]`}
            onClick={() => handleSongSelect(index)}
          >
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
