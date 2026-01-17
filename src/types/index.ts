// Tipos principais do app Reconciliare

export type ThemeType = 'purple' | 'red' | 'blue' | 'black' | 'green';
export type LanguageType = 'pt' | 'en' | 'es';

export interface User {
  id: string;
  name: string;
  pinHash: string;
  avatar?: string;
  theme: ThemeType;
  language: LanguageType;
  xp: number;
  createdAt: string;
}

export interface Confession {
  id: string;
  date: string;
  sinsCount: number;
  sins: string[];
  notes?: string;
}

export interface Sin {
  id: string;
  description: string;
  source: 'exam' | 'manual';
  categoryId?: string;
  checked: boolean;
}

export interface ExamSin {
  id: string;
  description: string;
  checked: boolean;
}

export interface ExamCategory {
  id: string;
  name: string;
  expanded?: boolean;
  sins: ExamSin[];
}

export interface Article {
  id: string;
  title: string;
  content: string;
  source?: string;
}

export interface Prayer {
  id: string;
  title: string;
  content: string;
}

export interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  confessions: Confession[];
  currentExam: ExamCategory[];
  mySins: Sin[];
  lastConfession: string | null;
  nextConfession: string | null;
}
