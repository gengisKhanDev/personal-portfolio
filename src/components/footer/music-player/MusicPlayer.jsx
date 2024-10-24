import React, { useState, useRef } from "react";
import { AudioControls } from "./AudioControls";
import { SongList } from "./SongList";
import { AudioSettings } from "./AudioSettings.jsx";

export function MusicPlayer() {
  const songs = [
    {
      path: "/music/You're-always-on-my-mind.mp3",
      title: "You're Always on My Mind",
    },
    { path: "/music/Muneca-de-loza.mp3", title: "Muñeca de Loza" },
    {
      path: "/music/I've-Got-You-Under-My-Skin.mp3",
      title: "I've Got You Under My Skin",
    },
    { path: "/music/Poema.mp3", title: "Poema" },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // Estado inicial en pausa

  const audioRef = useRef(null);

  // Controla el cambio entre play y pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Canción siguiente
  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 100);
    }
  };

  // Canción anterior
  const prevSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 100);
    }
  };

  // Selección manual de una canción
  const handleSongSelect = (index) => {
    setCurrentSongIndex(index);
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 100);
    }
  };

  return (
    <div className="p-0 rounded shadow-lg">
      <audio
        ref={audioRef}
        src={songs[currentSongIndex].path}
        onEnded={nextSong}
      />

      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center">
        <div className="flex-grow">
          <AudioSettings />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <AudioControls
            isPlaying={isPlaying}
            togglePlayPause={togglePlayPause}
            nextSong={nextSong}
            prevSong={prevSong}
          />

          <SongList
            songs={songs}
            currentSongIndex={currentSongIndex}
            handleSongSelect={handleSongSelect}
          />
        </div>
      </div>
    </div>
  );
}
