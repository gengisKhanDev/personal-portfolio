// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enFooter from './translations/footer/en.json';
import esFooter from './translations/footer/es.json';
import enSidebards from './translations/sidebards/en.json';
import esSidebards from './translations/sidebards/es.json';

const resources = {
  en: {
    translation: {
      footer: enFooter.footer,
      sidebards: enSidebards.sidebards,
    }
  },
  es: {
    translation: {
      footer: esFooter.footer,
      sidebards: esSidebards.sidebards,
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
