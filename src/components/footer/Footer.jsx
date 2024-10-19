import React from "react";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub } from "react-icons/bs";
import { MusicPlayer } from "./MusicPlayer.jsx";
import SocialLinks from "./SocialLinks.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { Disco } from "./Disco.jsx";

export function FooterProyect() {
  // const { language } = useLanguage(); // Obtener el idioma actual
  // const t = translations[language]; // Acceder a las traducciones del idioma actual

  return (
    <Footer className="bg-[#13151a] border-t-2 border-t-[#d4af37]">
      <div className="w-full">
        <div className="grid w-full grid-cols-4 gap-0 px-2 py-2 md:grid-cols-4">
          <LanguageSwitcher />
          <SocialLinks />
          <Disco />
          <MusicPlayer />
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
