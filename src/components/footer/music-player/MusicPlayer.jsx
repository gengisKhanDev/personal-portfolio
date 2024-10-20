import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AudioControls } from "./AudioControls";
import { SongList } from "./SongList";
import { SongInfo } from "./SongInfo";

export function MusicPlayer() {
  const songs = [
    { path: "/music/1You're-always-on-my-mind.mp3", title: "You're Always on My Mind" },
    { path: "/music/2Muneca-de-loza.mp3", title: "Muñeca de Loza" },
    { path: "/music/3I've-Got-You-Under-My-Skin.mp3", title: "I've Got You Under My Skin" },
  ];

  const muteSound = '/music/initSound.mp3'; 
  const unmuteSound = '/music/endSound.mp3'; 

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

  const handleSongSelect = (index) => {
    setCurrentSongIndex(index);
    if (isPlaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 100);
    }
  };

  const { t } = useTranslation();

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
        {/* Información de la canción actual */}
        <SongInfo title={songs[currentSongIndex].title} />

        {/* Controles de reproducción */}
        <AudioControls
          isPlaying={isPlaying}
          isMuted={isMuted}
          togglePlayPause={togglePlayPause}
          nextSong={nextSong}
          prevSong={prevSong}
          handleMuteToggle={handleMuteToggle}
        />

        {/* Lista de canciones */}
        <SongList
          songs={songs}
          currentSongIndex={currentSongIndex}
          handleSongSelect={handleSongSelect}
        />
      </div>
    </div>
  );
}
