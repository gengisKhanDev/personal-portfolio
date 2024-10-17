import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { MusicPlayer } from "./MusicPlayer.jsx";
import { useLanguage } from '../../context/LanguageContext.jsx'; // Usar el contexto del idioma
import { translations } from '../../context/translations.js'; // Importar las traducciones

export function FooterProyect() {
  // const { language } = useLanguage(); // Obtener el idioma actual
  // const t = translations[language]; // Acceder a las traducciones del idioma actual

  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
          {/* <h1>{t.welcome}</h1> */}

            {/* <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup> */}
          </div>
          <div>
            <MusicPlayer />
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="#" icon={BsGithub} />
                <Footer.Icon href="#" icon={BsDribbble} />
              </div>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
}
