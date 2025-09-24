import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// استيراد ملفات الترجمة
import translationEN from "./locales/en/translation.json";
import translationAR from "./locales/ar/translation.json";

// إعداد الموارد
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // اللغة الافتراضية
    interpolation: {
      escapeValue: false, // React يتعامل مع الحماية تلقائيًا
    },
  });

export default i18n;