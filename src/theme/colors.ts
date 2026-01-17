// Sistema de cores e temas do Reconciliare

import { ThemeType } from '../types';

export interface ThemeColors {
  primary: string;
  primaryLight: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textLight: string;
  textOnPrimary: string;
  border: string;
  error: string;
  success: string;
  warning: string;
  card: string;
  cardBorder: string;
  drawer: string;
  xpColor: string;
}

export const themes: Record<ThemeType, ThemeColors> = {
  purple: {
    primary: '#8B2F97',
    primaryLight: '#A855F7',
    secondary: '#C084FC',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    text: '#1F2937',
    textLight: '#6B7280',
    textOnPrimary: '#FFFFFF',
    border: '#E5E7EB',
    error: '#DC2626',
    success: '#16A34A',
    warning: '#F59E0B',
    card: '#8B2F97',
    cardBorder: '#6B2177',
    drawer: '#FFFFFF',
    xpColor: '#EAB308',
  },
  red: {
    primary: '#DC2626',
    primaryLight: '#EF4444',
    secondary: '#F87171',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    text: '#1F2937',
    textLight: '#6B7280',
    textOnPrimary: '#FFFFFF',
    border: '#E5E7EB',
    error: '#DC2626',
    success: '#16A34A',
    warning: '#F59E0B',
    card: '#DC2626',
    cardBorder: '#B91C1C',
    drawer: '#FFFFFF',
    xpColor: '#EAB308',
  },
  blue: {
    primary: '#2563EB',
    primaryLight: '#3B82F6',
    secondary: '#60A5FA',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    text: '#1F2937',
    textLight: '#6B7280',
    textOnPrimary: '#FFFFFF',
    border: '#E5E7EB',
    error: '#DC2626',
    success: '#16A34A',
    warning: '#F59E0B',
    card: '#2563EB',
    cardBorder: '#1D4ED8',
    drawer: '#FFFFFF',
    xpColor: '#EAB308',
  },
  black: {
    primary: '#1F2937',
    primaryLight: '#374151',
    secondary: '#4B5563',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    text: '#1F2937',
    textLight: '#6B7280',
    textOnPrimary: '#FFFFFF',
    border: '#E5E7EB',
    error: '#DC2626',
    success: '#16A34A',
    warning: '#F59E0B',
    card: '#1F2937',
    cardBorder: '#111827',
    drawer: '#FFFFFF',
    xpColor: '#EAB308',
  },
  green: {
    primary: '#16A34A',
    primaryLight: '#22C55E',
    secondary: '#4ADE80',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    text: '#1F2937',
    textLight: '#6B7280',
    textOnPrimary: '#FFFFFF',
    border: '#E5E7EB',
    error: '#DC2626',
    success: '#16A34A',
    warning: '#F59E0B',
    card: '#16A34A',
    cardBorder: '#15803D',
    drawer: '#FFFFFF',
    xpColor: '#EAB308',
  },
};

export const getTheme = (themeType: ThemeType): ThemeColors => {
  return themes[themeType] || themes.purple;
};

export const themeOptions: { key: ThemeType; color: string }[] = [
  { key: 'purple', color: '#8B2F97' },
  { key: 'red', color: '#DC2626' },
  { key: 'blue', color: '#2563EB' },
  { key: 'black', color: '#1F2937' },
  { key: 'green', color: '#16A34A' },
];
