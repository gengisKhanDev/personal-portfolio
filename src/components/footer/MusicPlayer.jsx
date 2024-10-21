import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Disco } from "./Disco.jsx";

export function MusicPlayer() {
  const songs = [
    { path: "/music/1You're-always-on-my-mind.mp3", title: "You're Always on My Mind" },
    { path: "/music/2Muneca-de-loza.mp3", title: "Muñeca de Loza" },
    { path: "/music/3I've-Got-You-Under-My-Skin.mp3", title: "I've Got You Under My Skin" },
  ];

  const muteSound = '/music/initSound.mp3'; // Archivo de sonido de 5 segundos para mute
  const unmuteSound = '/music/endSound.mp3'; // Archivo de sonido de 5 segundos para unmute

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const audioRef = useRef(null);
  const muteAudioRef = useRef(null);
  const unmuteAudioRef = useRef(null);

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

  // Modificar la función para manejar el cambio de canción desde la lista
  const handleSongSelect = (index) => {
    setCurrentSongIndex(index);
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current.play();  // Si ya está en reproducción, reproduce la nueva canción
      }, 100);
    }
  };

  const { t } = useTranslation(); // Hook de traducción

  return (
    <div className="p-4 bg-gray-100 rounded shadow-lg">
      <h2 className="text-lg font-bold mb-4">{t("footer.title")}</h2>

      {/* Reproductor de audio */}
      <audio
        ref={audioRef}
        src={songs[currentSongIndex].path}
        muted={isMuted}
        onEnded={nextSong}
      />
      <audio ref={muteAudioRef} src={muteSound} />
      <audio ref={unmuteAudioRef} src={unmuteSound} />

      {/* Contenedor de controles y títulos */}
      <div className="flex justify-between items-center space-x-4">
        {/* Título de la canción actual */}
        <div className="flex flex-col items-start">
          {/* Ícono de nota musical encima de la canción actual */}
          <img
            src="/icons/musical-note.svg"
            alt="icon"
            className="h-8 mb-2 filter"
          />
          <p className="font-bold">{songs[currentSongIndex].title}</p>
        </div>

        {/* Controles de reproducción */}
        <div className="flex flex-col items-center">
          {/* Componente Disco justo encima de los controles */}
          <Disco className="mb-4" isPlaying={isPlaying} isMuted={isMuted} />  {/* Pasamos también isMuted */}

          {/* Botones de reproducción */}
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
              {isPlaying ? 'Pause' : 'Play'}
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
            <span>Unmute</span> {/* El texto permanece fijo en "Unmute" */}
          </label>
        </div>

        {/* Lista de canciones */}
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
      </div>
    </div>
  );
}
