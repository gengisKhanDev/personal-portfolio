// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "modalMessage": "This is a Flowbite React Modal",
      "openModal": "Open Modal",
      "close": "Close",
      "title": "Music Player",
      "play": "Play",
      "pause": "Pause",
      "prev": "Prev",
      "next": "Next",
      "unmute": "Unmute",
      "nowPlaying": "Now playing"
    }
  },
  es: {
    translation: {
      "modalMessage": "Este es un Modal de Flowbite React",
      "openModal": "Abrir Modal",
      "close": "Cerrar",
      "title": "Reproductor de Música",
      "play": "Reproducir",
      "pause": "Pausar",
      "prev": "Anterior",
      "next": "Siguiente",
      "unmute": "Activar sonido",
      "nowPlaying": "Reproduciendo"
    }
  }
};

i18n
  .use(initReactI18next) // Pasa el módulo de react-i18next a i18next
  .init({
    resources,
    lng: "en", // Idioma por defecto
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
  });

export default i18n;
