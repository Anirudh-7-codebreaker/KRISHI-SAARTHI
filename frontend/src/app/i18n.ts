import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './components/languages/en.json';
import hiTranslation from './components/languages/hn.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      hi: {
        translation: hiTranslation,
      },
    },
    fallbackLng: 'en', // Fallback language if detection fails or a key is missing
    debug: true, // Set to true for debugging in development. Remember to set to false for production.
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;