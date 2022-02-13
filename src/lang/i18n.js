import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import langUz from "./uz.json";
import langRu from "./ru.json";
import { useState } from "react";


const resources = {
  uz: {
    translation: langUz,
  },
  ru: {
    translation: langRu,
  },
};

i18n.use(initReactI18next).init({
  resources,

  lng: 'ru',
  fallbackLng: 'ru',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;