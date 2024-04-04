import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./src/assets/locales/en";
import vi from "./src/assets/locales/vi";

const determineLanguage = () => {
  const initLanguage = sessionStorage.getItem("@language");
  if (!initLanguage) {
    sessionStorage.setItem("@language", "en");
    return "en";
  }
  return initLanguage;
};

i18n.use(initReactI18next).init({
  lng: determineLanguage(),
  // debug: true,
  // lng: determineLanguageFromLocalhost,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
});

export default i18n;
