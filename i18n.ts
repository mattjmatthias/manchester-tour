// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import common_en from './public/locales/en/common.json';
import common_fr from './public/locales/fr/common.json';
import common_de from './public/locales/de/common.json';
import common_es from './public/locales/es/common.json';
import common_it from './public/locales/it/common.json';
import common_cn from './public/locales/cn/common.json';
import common_jp from './public/locales/jp/common.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: process.env.NODE_ENV === 'development',
  resources: {
    en: { common: common_en },
    fr: { common: common_fr },
    de: { common: common_de },
    es: { common: common_es },
    it: { common: common_it },
    cn: { common: common_cn },
    jp: { common: common_jp },
  },
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;