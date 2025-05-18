import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const languages = [
    { code: 'en', lang: 'English' },
    { code: 'fr', lang: 'French' },
    { code: 'hi', lang: 'Hindi' },
    { code: 'bn', lang: 'Bangla' },
    { code: 'ar', lang: 'Arabic' },
    { code: 'zh', lang: 'Chinease' },
    { code: 'ja', lang: 'Japanease' },
    { code: 'ko', lang: 'Korean' },
  ];

  const changeLanguage = (code) => {
    console.log(code);
    i18n.changeLanguage(code);
  };

  const { i18n } = useTranslation();

  useEffect(() => {
    console.log(i18n.dir());
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="btn-container">
      {languages.map((e, i) => (
        <button
          className={e.code == i18n.language ? 'selected' : ''}
          key={i}
          onClick={() => changeLanguage(e.code)}
        >
          {e.lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
