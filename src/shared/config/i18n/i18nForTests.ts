import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'ua',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: { ua: { translations: {} } },
  });

export default i18n;
