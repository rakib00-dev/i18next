import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const languages = [
    { code: 'en', lang: 'English' },
    { code: 'fr', lang: 'French' },
    { code: 'hi', lang: 'Hindi' },
    { code: 'bn', lang: 'Bangla' },
    { code: 'ar', lang: 'Arabic' },
  ];

  const changeLanguage = (code) => {
    console.log(code);
    i18n.changeLanguage(code);
  };

  const { i18n } = useTranslation();

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
