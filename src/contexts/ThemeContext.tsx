// Context para gerenciamento de temas

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeType } from '../types';
import { ThemeColors, getTheme } from '../theme/colors';
import { getUser, saveUser } from '../services/storage';

interface ThemeContextData {
  theme: ThemeType;
  colors: ThemeColors;
  setTheme: (theme: ThemeType) => Promise<void>;
  reloadTheme: () => Promise<void>;
  applyTheme: (theme: ThemeType) => void;
  resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>('purple');
  const [colors, setColors] = useState<ThemeColors>(getTheme('purple'));

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    const user = await getUser();
    if (user?.theme) {
      setThemeState(user.theme);
      setColors(getTheme(user.theme));
    }
  };

  // Recarrega o tema do storage (usado após import)
  const reloadTheme = async () => {
    await loadTheme();
  };

  // Aplica um tema diretamente (sem salvar no storage)
  const applyTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    setColors(getTheme(newTheme));
  };

  const setTheme = async (newTheme: ThemeType) => {
    setThemeState(newTheme);
    setColors(getTheme(newTheme));

    const user = await getUser();
    if (user) {
      user.theme = newTheme;
      await saveUser(user);
    }
  };

  const resetTheme = () => {
    setThemeState('purple');
    setColors(getTheme('purple'));
  };

  return (
    <ThemeContext.Provider value={{ theme, colors, setTheme, reloadTheme, applyTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
