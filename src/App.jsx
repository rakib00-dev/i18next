import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/languageSelector';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t('greeting')}</h1>
    </div>
  );
}

export default App;
