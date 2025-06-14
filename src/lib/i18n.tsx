
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

type TranslationStringKey = Exclude<keyof typeof translations['en'], 'menu'>;
type TranslationMenuKey = 'menu';

interface I18nContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationStringKey) => string;
  menu: () => string[];
}
const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');
  const t = (key: TranslationStringKey) =>
    translations[lang][key] || translations['en'][key] || key;
  const menu = () =>
    (translations[lang].menu || translations['en'].menu);

  return (
    <I18nContext.Provider value={{ lang, setLang, t, menu }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};
