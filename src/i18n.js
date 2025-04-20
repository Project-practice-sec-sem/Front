import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './i18n/translations/en_translation.json';
import translationRU from './i18n/translations/ru_translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      ru: {
        translation: translationRU
      }
    },
    fallbackLng: 'ru', // Язык по умолчанию
    debug: false, // Включить только для разработки
    interpolation: {
      escapeValue: false // React уже защищает от XSS
    }
  });

export default i18n;
