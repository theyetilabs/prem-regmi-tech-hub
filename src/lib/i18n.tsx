
import React, { createContext, useContext, useState, ReactNode } from "react";

const translations = {
  en: {
    menu: ['About', 'Journey', 'Vision', 'Connect'],
    heroHi: "Hi, my name is",
    heroSubtitle: "Transforming Nepal into a Global Tech Hub",
    heroDescription:
      "Founder & CEO of The Yeti Labs, bridging global technology opportunities with Nepal's talented workforce.",
    heroStats: [
      { value: "3", label: "Countries" },
      { value: "50+", label: "Clients" },
      { value: "100+", label: "Projects" }
    ],
    connectBtn: "Connect with Me",
    exploreBtn: "Explore My Journey",
    language: "Language",
    aboutTitle: "About Me",
    journeyTitle: "My Journey", 
    visionTitle: "Leadership & Vision",
    connectTitle: "Let's Connect",
    aboutParagraph1: "I am Prem Regmi, the Founder and CEO of The Yeti Labs, a technology consulting and software development company dedicated to unlocking Nepal's potential as a global technology leader. Born and raised in Pokhara in the 1990s, I was captivated by the rapid evolution of technology during my formative years.",
    aboutParagraph2: "My international education and experiences have shaped my vision to bridge global tech opportunities with Nepal's talented workforce. My passion for social contribution drives my mission to create a skilled, inclusive workforce that can compete globally.",
    linkedin: "LinkedIn",
    website: "Visit Website",
    journeyStep1Title: "Foundation Years",
    journeyStep1Desc: "Bachelor's in Software Engineering at Gandaki College of Engineering and Science",
    journeyStep2Title: "International Education",
    journeyStep2Desc: "Degree in Information Science from Oslo and Akershus University College",
    journeyStep3Title: "Industry Experience",
    journeyStep3Desc: "Roles at ClinchTech and Black Tech, COO at Mero Padhai",
    journeyStep4Title: "The Yeti Labs",
    journeyStep4Desc: "Founded and leading Nepal's premier tech consulting company",
    visionCard1Title: "Innovation Leadership",
    visionCard1Desc: "Driving technological innovation that bridges global opportunities with local talent, creating sustainable solutions for Nepal's tech ecosystem.",
    visionCard2Title: "Inclusive Growth",
    visionCard2Desc: "Building an inclusive workforce that welcomes talent from all backgrounds, fostering diversity and equality in Nepal's tech sector.",
    visionCard3Title: "Global Impact",
    visionCard3Desc: "Positioning Nepal as a premier destination for tech talent and innovation, creating opportunities that benefit both local communities and global markets.",
    connectDesc: "Ready to explore how technology can drive social impact? Let's discuss opportunities to collaborate and build Nepal's tech future together.",
    footer: "© {year} The Yeti Labs. Powered by <strong class=\"text-white\">Lovable</strong>.",
    connectOnLinkedin: "Connect on LinkedIn",
    visitYetiLabs: "Visit The Yeti Labs"
    // ... add more as needed ...
  },
  ja: {
    menu: ['私について', '経歴', 'ビジョン', '連絡'],
    heroHi: "こんにちは、私の名前は",
    heroSubtitle: "ネパールをグローバルテックハブに変革",
    heroDescription:
      "The Yeti Labsの創設者兼CEOとして、グローバルなテクノロジーの機会とネパールの才能ある人材をつなげます。",
    heroStats: [
      { value: "3", label: "国" },
      { value: "50+", label: "クライアント" },
      { value: "100+", label: "プロジェクト" }
    ],
    connectBtn: "私に連絡する",
    exploreBtn: "私の旅を探る",
    language: "言語",
    aboutTitle: "私について",
    journeyTitle: "私の経歴",
    visionTitle: "リーダーシップとビジョン", 
    connectTitle: "つながりましょう",
    aboutParagraph1: "私はPrem Regmi、The Yeti Labsの創設者兼CEOです。The Yeti Labsは、ネパールの可能性をグローバルリーダーへと解き放つためのテクノロジーコンサルティングおよびソフトウェア開発会社です。1990年代にポカラで生まれ育った私は、成長期における技術の急速な進化に魅了されました。",
    aboutParagraph2: "私の海外教育と経験は、グローバルなテックの機会とネパールの人材を繋ぐビジョンに繋がっています。社会貢献への情熱が、世界で戦えるスキルを持つ包括的で多様な人材育成への使命を支えています。",
    linkedin: "LinkedIn（日本語）",
    website: "公式サイトを見る",
    journeyStep1Title: "基礎期間",
    journeyStep1Desc: "ガンダキ工科大学でソフトウェア工学の学士号取得",
    journeyStep2Title: "海外での教育",
    journeyStep2Desc: "オスロ・アカシュス大学で情報科学を専攻",
    journeyStep3Title: "業界経験",
    journeyStep3Desc: "ClinchTechとBlack Techでの職務、Mero PadhaiのCOO",
    journeyStep4Title: "The Yeti Labs",
    journeyStep4Desc: "ネパール有数のテックコンサル企業を創業・リード",
    visionCard1Title: "イノベーションのリーダーシップ",
    visionCard1Desc: "グローバルな機会とローカル人材をつなぐ革新的な技術で、ネパールのテックエコシステムに持続可能な解決策を提供。",
    visionCard2Title: "包摂的な成長",
    visionCard2Desc: "多様な背景の人材を歓迎し、多様性と平等を推進する包摂的な労働力を構築。",
    visionCard3Title: "グローバルな影響",
    visionCard3Desc: "ネパールをテック人材とイノベーションの拠点として位置づけ、ローカルとグローバル双方に利益をもたらす機会を創出。",
    connectDesc: "テクノロジーによる社会的インパクトとその可能性についてご興味がある方は、ぜひ一緒にネパールの未来を語り合いましょう。",
    footer: "© {year} The Yeti Labs. <strong class=\"text-white\">Lovable</strong>により運営されています。",
    connectOnLinkedin: "LinkedInでつながる",
    visitYetiLabs: "The Yeti Labs公式サイト"
    // ... add more as needed ...
  }
};

type Language = 'en' | 'ja';

// Only allow keys for pure string values
type StringKey<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type TranslationStringKey = StringKey<typeof translations['en']>;

interface I18nContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationStringKey) => string;
  menu: () => string[];
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  // Fallback always to English string if not available in selected language
  const t = (key: TranslationStringKey): string =>
    (translations[lang][key] as string) ??
    (translations['en'][key] as string) ??
    key;

  const menu = () => translations[lang].menu || translations['en'].menu;

  const value = {
    lang,
    setLang,
    t,
    menu
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};
