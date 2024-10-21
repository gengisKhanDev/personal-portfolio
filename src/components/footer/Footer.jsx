import React from "react";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub } from "react-icons/bs";
import { MusicPlayer } from "./music-player/MusicPlayer.jsx";
import SocialLinks from "./SocialLinks.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export function FooterProyect() {
  // const { language } = useLanguage(); // Obtener el idioma actual
  // const t = translations[language]; // Acceder a las traducciones del idioma actual

  return (
    <Footer className="bg-[#13151a] rounded-none border-t-2 border-t-[#d4af37]">
      <div className="w-full">
        <div className="flex w-full gap-2 px-2 py-2">
          <div className="flex-grow">
            <LanguageSwitcher />
          </div>
          {/* <SocialLinks />
          <img
            src="/icons/musical-note.svg"
            alt="icon"
            className="h-8 filter"/> */}
          <div className="flex-shrink-0">
            <MusicPlayer />
          </div>
          <div className="flex-grow">
            <SocialLinks />
          </div>
          {/* <h1>{t.welcome}</h1> */}

          {/* <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup> */}
          <div>{/* <MusicPlayer /> */}</div>
        </div>
      </div>
    </Footer>
  );
}
