// MusicPlayer.jsx
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

export function MusicPlayer() {
  // Lista de canciones
  const songs = [
    "/music/1You're-always-on-my-mind.mp3",
    "/music/2Muneca-de-loza.mp3",
    "/music/3I've-Got-You-Under-My-Skin.mp3",
  ];

  const muteSound = '/music/initSound.mp3'; // Archivo de sonido de 5 segundos para mute
  const unmuteSound = '/music/endSound.mp3'; // Archivo de sonido de 5 segundos para unmute
  // Estado para controlar la canción actual
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // Estado para controlar si el reproductor está en reproducción o en pausa
  const [isPlaying, setIsPlaying] = useState(false);
  // Estado para controlar si el sonido está activado o no
  const [isMuted, setIsMuted] = useState(true);

  // Referencia al elemento de audio principal (canciones)
  const audioRef = useRef(null);
  // Referencias a los audios para mute y unmute
  const muteAudioRef = useRef(null);
  const unmuteAudioRef = useRef(null);


  // Función para reproducir o pausar la canción
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 100);
    }
  };

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

  const handleMuteToggle = () => {
    if (isMuted) {
      unmuteAudioRef.current.play();
      setTimeout(() => {
        audioRef.current.muted = false;
        audioRef.current.play();
        setIsPlaying(true);
        setIsMuted(false);
      }, 4000);
    } else {
      muteAudioRef.current.play();
      audioRef.current.pause();
      setIsPlaying(false);
      setTimeout(() => {
        audioRef.current.muted = true;
        setIsMuted(true);
      }, 2000);
    }
  };

  const { t } = useTranslation(); // Hook de traducción

  return (
    <div className="p-4 bg-gray-100 rounded shadow-lg">
      <h2 className="text-lg font-bold mb-4">{t("title")}</h2>

      <audio
        ref={audioRef}
        src={songs[currentSongIndex]}
        muted={isMuted}
        onEnded={nextSong}
      />

      <audio ref={muteAudioRef} src={muteSound} />
      <audio ref={unmuteAudioRef} src={unmuteSound} />

      <div className="flex items-center space-x-4">
        <button
          onClick={togglePlayPause}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          disabled={isMuted}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={prevSong}
          className="px-4 py-2 bg-green-500 text-white rounded"
          disabled={isMuted}
        >
          Prev
        </button>
        <button
          onClick={nextSong}
          className="px-4 py-2 bg-green-500 text-white rounded"
          disabled={isMuted}
        >
          Next
        </button>
        <label className="ml-4 flex items-center space-x-2">
          <input type="checkbox" checked={!isMuted} onChange={handleMuteToggle} />
          <span>Unmute</span>
        </label>
      </div>

      <div className="mt-4">
        <p>Now playing: {songs[currentSongIndex].split('/').pop()}</p>
      </div>
    </div>
  );
}
