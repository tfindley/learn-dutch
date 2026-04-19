import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../lib/useLocalStorage';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [showEnglish, setShowEnglish] = useLocalStorage('showEnglish', true);
  // translationLang controls which language translations are shown in.
  // Currently always 'en'; add a setter and persist it when French (or other)
  // translations are added to the content files.
  const [translationLang] = useState('en');

  function toggle() {
    setShowEnglish(prev => !prev);
  }

  return (
    <LanguageContext.Provider value={{ showEnglish, toggle, translationLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
