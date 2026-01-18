// Context para gerenciamento de idioma e traduções

import React, { createContext, useContext, useEffect, ReactNode, useCallback } from 'react';
import { LanguageType } from '../types';
import i18n from '../i18n';
import { useUser } from './UserContext';

interface LanguageContextData {
  language: LanguageType;
  t: (key: string, options?: Record<string, any>) => string;
  setLanguage: (language: LanguageType) => Promise<void>;
  getLocale: () => string;
}

const LanguageContext = createContext<LanguageContextData>({} as LanguageContextData);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { user, updateUser } = useUser();
  const language = user?.language || 'pt';

  // Sincronizar idioma do i18n com preferência do usuário
  useEffect(() => {
    if (user?.language) {
      i18n.locale = user.language;
    }
  }, [user?.language]);

  // Função de tradução - depende de language para re-renderizar quando idioma mudar
  const t = useCallback((key: string, options?: Record<string, any>): string => {
    return i18n.t(key, options);
  }, [language]);

  // Alterar idioma
  const setLanguage = useCallback(async (newLanguage: LanguageType) => {
    i18n.locale = newLanguage;
    if (user) {
      await updateUser({ language: newLanguage });
    }
  }, [user, updateUser]);

  // Obter locale atual (para formatação de datas, etc)
  const getLocale = useCallback((): string => {
    const localeMap: Record<LanguageType, string> = {
      pt: 'pt-BR',
      en: 'en-US',
      es: 'es-ES',
    };
    return localeMap[language];
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        t,
        setLanguage,
        getLocale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextData => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
