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
            line1: 'Masud, when will you get well? {{channel}}',
            line2: 'This is an Internationalisation Tutorial',
          },
        },
      },
      fr: {
        translation: {
          greeting: 'Bonjour, Bienvenue',
          description: {
            line1: 'Masud, quand allez-vous guérir ? {{channel}}',
            line2: "Ceci est un tutoriel d'internationalisation",
          },
        },
      },
      hi: {
        translation: {
          greeting: 'नमस्ते, स्वागत है',
          description: {
            line1: 'मासूद, आप ठीक कब होंगे? {{channel}}',
            line2: 'यह एक अंतरराष्ट्रीयकरण ट्यूटोरियल है',
          },
        },
      },
      bn: {
        translation: {
          greeting: 'হ্যালো, স্বাগতম',
          description: {
            line1: 'মাসুদ, আপনি ভালো হবেন কবে? {{channel}}',
            line2: 'এটি একটি আন্তর্জাতিককরণ টিউটোরিয়াল',
          },
        },
      },
      ar: {
        translation: {
          greeting: 'مرحباً، أهلا بك!',
          description: {
            line1: 'يا مسعود، متى ستشفى؟',
            line2: 'هذا هو البرنامج التعليمي للتدويل {{channel}}',
          },
        },
      },
      zh: {
        translation: {
          greeting: '你好，欢迎',
          description: {
            line1: 'Masud，你什么时候会好起来？ {{channel}}',
            line2: '这是一个国际化教程',
          },
        },
      },
      ja: {
        translation: {
          greeting: 'こんにちは、ようこそ',
          description: {
            line1: 'マスードさん、いつ良くなりますか？ {{channel}}',
            line2: 'これは国際化チュートリアルです',
          },
        },
      },
      ko: {
        translation: {
          greeting: '안녕하세요, 환영합니다',
          description: {
            line1: '마수드, 언제쯤 건강해질 거예요? {{channel}}',
            line2: '이것은 국제화 튜토리얼입니다',
          },
        },
      },
    },
  });
