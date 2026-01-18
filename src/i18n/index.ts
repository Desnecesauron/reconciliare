// Configuração do i18n

import { I18n } from 'i18n-js';
import pt from './locales/pt';
import en from './locales/en';
import es from './locales/es';

const i18n = new I18n({
  pt,
  en,
  es,
});

i18n.defaultLocale = 'pt';
i18n.locale = 'pt';
i18n.enableFallback = true;

export default i18n;
