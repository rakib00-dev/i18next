import { Trans, useTranslation } from 'react-i18next';
import LanguageSelector from './components/languageSelector';
import './App.css';

function App() {
  const { t } = useTranslation();

  const { line1, line2 } = t('description');

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t('greeting')}</h1>
      {/* <p>{line1}</p> */}
      <span>
        <Trans
          i18nKey={line1}
          values={{ channel: 'Rakib' }}
          components={{ 1: <b></b> }}
        ></Trans>
      </span>
      <span>{line2}</span>
    </div>
  );
}

export default App;
