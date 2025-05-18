// i18next import
import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          greeting: 'Hello, Welcome',
        },
      },
      // fr: {
      //   translation: {
      //     greeting: 'Bonjour, Bienvenue',
      //   },
      // },
      hi: {
        translation: {
          greeting: 'नमस्ते, स्वागत है',
        },
      },
      bn: {
        translation: {
          greeting: 'হ্যালো, স্বাগতম',
        },
      },
    },
  });
