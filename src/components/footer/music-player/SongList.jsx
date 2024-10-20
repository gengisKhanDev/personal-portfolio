import React from "react";

export function SongList({ songs, currentSongIndex, handleSongSelect }) {
  return (
    <div className="ml-4">
      <ul>
        {songs.map((song, index) => (
          <li
            key={index}
            className={`cursor-pointer ${index === currentSongIndex ? 'font-bold text-blue-500' : 'text-gray-700'}`}
            onClick={() => handleSongSelect(index)}
          >
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
