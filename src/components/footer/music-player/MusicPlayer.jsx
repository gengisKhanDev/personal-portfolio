import React, { useState, useRef } from "react";
import { AudioControls } from "./AudioControls";
import { SongList } from "./SongList";
import { AudioSettings } from "./AudioSettings.jsx";

export function MusicPlayer() {
  const songs = [
    {
      path: "/music/epilogue.mp3",
      title: "Epilogue - 1:38",
    },
    { path: "/music/great-fairys-fountain.mp3", title: "Great Fairy's Fountain - 1:52" },
    {
      path: "/music/merry-go-round-of-life.mp3",
      title: "Merry Go Round Of Life - 5:15",
    },
    { path: "/music/pas-de-deux.mp3", title: "Pas De Deux - 5:55" },
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
