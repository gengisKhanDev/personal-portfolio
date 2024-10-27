import React from "react";
import "./Disco.css";

export function Disco({ isPlaying, isMuted }) {
  return (
    <div className={`disco-container relative w-40 ${isPlaying && !isMuted ? "spin" : ""} left-14`}>
      <div className="record"></div>
      <div className="record-center"></div>
      <div className="record-ring-1"></div>
      <div className="record-ring-2"></div>
    </div>
  );
}
