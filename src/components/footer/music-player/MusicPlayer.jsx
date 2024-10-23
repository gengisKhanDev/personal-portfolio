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

  const muteSound = "/music/initSound.mp3";
  const unmuteSound = "/music/endSound.mp3";

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
      }, 3000);
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

  return (
    <div className="p-0 rounded shadow-lg">
      <audio
        ref={audioRef}
        src={songs[currentSongIndex].path}
        muted={isMuted}
        onEnded={nextSong}
      />
      <audio ref={muteAudioRef} src={muteSound} />
      <audio ref={unmuteAudioRef} src={unmuteSound} />

      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center">
        <div className="flex-grow">
          <AudioSettings
            isMuted={isMuted}
            handleMuteToggle={handleMuteToggle}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <AudioControls
            isPlaying={isPlaying}
            isMuted={isMuted}
            togglePlayPause={togglePlayPause}
            nextSong={nextSong}
            prevSong={prevSong}
            handleMuteToggle={handleMuteToggle}
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
