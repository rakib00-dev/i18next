// i18next import
import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    returnObjects: true,
  });
