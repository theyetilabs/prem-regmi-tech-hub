
import React, { createContext, useContext, useState, ReactNode } from "react";

const translations = {
  en: {
    menu: ['About', 'Journey', 'Vision', 'Background', 'Connect'],
    heroHi: "Hi, my name is",
    connectBtn: "Connect with Me",
    language: "Language",
    // Add more as needed ...
  },
  ja: {
    menu: ['私について', '経歴', 'ビジョン', '背景', '連絡'],
    heroHi: "こんにちは、私の名前は",
    connectBtn: "私に連絡する",
    language: "言語",
    // Add more as needed ...
  }
};

type Language = 'en' | 'ja';

interface I18nContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof typeof translations['en']) => string;
}
const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');
  const t = (key: keyof typeof translations['en']) => translations[lang][key] || translations['en'][key] || key;
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};
