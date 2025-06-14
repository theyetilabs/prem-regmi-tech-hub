
import React, { createContext, useContext, useState, ReactNode } from "react";

const translations = {
  en: {
    menu: ['About', 'Journey', 'Vision', 'Connect'],
    heroHi: "Hi, my name is",
    heroSubtitle: "Transforming Nepal into a Global Tech Hub",
    heroDescription: "Founder & CEO of The Yeti Labs, bridging global technology opportunities with Nepal's talented workforce.",
    connectBtn: "Connect with Me",
    exploreBtn: "Explore My Journey",
    language: "Language",
    aboutTitle: "About Me",
    journeyTitle: "My Journey", 
    visionTitle: "Leadership & Vision",
    connectTitle: "Let's Connect",
    // Add more as needed ...
  },
  ja: {
    menu: ['私について', '経歴', 'ビジョン', '連絡'],
    heroHi: "こんにちは、私の名前は",
    heroSubtitle: "ネパールをグローバルテックハブに変革",
    heroDescription: "The Yeti Labsの創設者兼CEO、グローバルなテクノロジーの機会とネパールの優秀な人材を橋渡し。",
    connectBtn: "私に連絡する",
    exploreBtn: "私の旅を探る",
    language: "言語",
    aboutTitle: "私について",
    journeyTitle: "私の経歴",
    visionTitle: "リーダーシップとビジョン", 
    connectTitle: "つながりましょう",
    // Add more as needed ...
  }
};

type Language = 'en' | 'ja';

type TranslationStringKey = Exclude<keyof typeof translations['en'], 'menu'>;

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
    translations[lang].menu || translations['en'].menu;

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
