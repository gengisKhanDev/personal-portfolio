import React from "react";
import { Footer } from "flowbite-react";
import { MusicPlayer } from "./music-player/MusicPlayer.jsx";
import SocialLinks from "./SocialLinks.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export function FooterProyect() {
  return (
    <Footer className="bg-transparent rounded-none border-t-2 border-t-[#d4af37]">
      <div className="w-full">
        <div className="flex flex-col md:flex-row w-full gap-2 px-2 py-2">
          <div className="flex-grow md:w-auto">
            <LanguageSwitcher />
          </div>
          <div className="flex-shrink-0 md:w-auto">
            <MusicPlayer />
          </div>
          <div className="flex-grow md:w-auto">
            <SocialLinks />
          </div>
        </div>
      </div>
    </Footer>
  );
}