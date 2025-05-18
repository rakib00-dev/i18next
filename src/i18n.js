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
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greeting: 'Hello, Welcome',
          description: {
            line1: "You're watching RoadsideCoder YouTube Channel",
            line2: 'This is an Internationalisation Tutorial',
          },
        },
      },
      fr: {
        translation: {
          greeting: 'Bonjour, Bienvenue',
          description: {
            line1: 'Vous regardez la chaîne YouTube RoadsideCoder',
            line2: "Ceci est un tutoriel d'internationalisation",
          },
        },
      },
      hi: {
        translation: {
          greeting: 'नमस्ते, स्वागत है',
          description: {
            line1: 'आप RoadsideCoder YouTube चैनल देख रहे हैं',
            line2: 'यह एक अंतरराष्ट्रीयकरण ट्यूटोरियल है',
          },
        },
      },
      bn: {
        translation: {
          greeting: 'হ্যালো, স্বাগতম',
          description: {
            line1: 'আপনি RoadsideCoder ইউটিউব চ্যানেল দেখছেন',
            line2: 'এটি একটি আন্তর্জাতিককরণ টিউটোরিয়াল',
          },
        },
      },
      ar: {
        translation: {
          greeting: 'مرحباً، أهلا بك!',
          description: {
            line1: 'أنت تشاهد قناة RoadsideCoder على اليوتيوب',
            line2: 'هذا هو البرنامج التعليمي للتدويل',
          },
        },
      },
    },
  });
