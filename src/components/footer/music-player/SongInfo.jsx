import React from "react";

export function SongInfo({ title }) {
  return (
    <div className="flex flex-col items-start">
      <img
        src="/icons/musical-note.svg"
        alt="icon"
        className="h-8 mb-4 filter"
      />
      <p className="font-bold white-custom">{title}</p>
    </div>
  );
}
