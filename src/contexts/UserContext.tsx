// Context para gerenciamento de dados do usuário

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import * as Crypto from 'expo-crypto';
import { User, Confession, Sin, ExamCategory, ThemeType, LanguageType } from '../types';
import {
  saveUser,
  getUser,
  saveConfessions,
  getConfessions,
  saveMySins,
  getMySins,
  saveLastConfession,
  getLastConfession,
  saveNextConfession,
  getNextConfession,
  clearMySins,
  saveExamState,
  getExamState,
  clearExamState,
} from '../services/storage';

interface UserContextData {
  user: User | null;
  confessions: Confession[];
  mySins: Sin[];
  lastConfession: string | null;
  nextConfession: string | null;
  examState: ExamCategory[] | null;
  isLoading: boolean;
  createUser: (name: string, theme: ThemeType, language: LanguageType, avatar?: string) => Promise<void>;
  updateUser: (updates: Partial<User>) => Promise<void>;
  addXp: (amount: number) => Promise<void>;
  loadUserData: () => Promise<void>;
  addSin: (description: string, source: 'exam' | 'manual', categoryId?: string) => Promise<void>;
  removeSin: (sinId: string) => Promise<void>;
  clearAllSins: () => Promise<void>;
  saveExam: (exam: ExamCategory[]) => Promise<void>;
  loadExam: () => Promise<ExamCategory[] | null>;
  registerConfession: (notes?: string) => Promise<void>;
  setNextConfessionDate: (date: string) => Promise<void>;
  resetUserData: () => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const [mySins, setMySins] = useState<Sin[]>([]);
  const [lastConfession, setLastConfessionState] = useState<string | null>(null);
  const [nextConfession, setNextConfessionState] = useState<string | null>(null);
  const [examState, setExamStateLocal] = useState<ExamCategory[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    setIsLoading(true);
    try {
      const [
        userData,
        confessionsData,
        sinsData,
        lastConfessionData,
        nextConfessionData,
        examData,
      ] = await Promise.all([
        getUser(),
        getConfessions(),
        getMySins(),
        getLastConfession(),
        getNextConfession(),
        getExamState(),
      ]);

      setUser(userData);
      setConfessions(confessionsData);
      setMySins(sinsData);
      setLastConfessionState(lastConfessionData);
      setNextConfessionState(nextConfessionData);
      setExamStateLocal(examData);
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createUser = async (
    name: string,
    theme: ThemeType,
    language: LanguageType,
    avatar?: string
  ) => {
    const newUser: User = {
      id: Crypto.randomUUID(),
      name,
      pinHash: '',
      theme,
      language,
      avatar,
      xp: 0,
      createdAt: new Date().toISOString(),
    };
    await saveUser(newUser);
    setUser(newUser);
  };

  const updateUser = async (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      await saveUser(updatedUser);
      setUser(updatedUser);
    }
  };

  const addXp = async (amount: number) => {
    if (user) {
      const updatedUser = { ...user, xp: user.xp + amount };
      await saveUser(updatedUser);
      setUser(updatedUser);
    }
  };

  const addSin = async (description: string, source: 'exam' | 'manual', categoryId?: string) => {
    const newSin: Sin = {
      id: Crypto.randomUUID(),
      description,
      source,
      categoryId,
      checked: true,
    };
    const updatedSins = [...mySins, newSin];
    await saveMySins(updatedSins);
    setMySins(updatedSins);
  };

  const removeSin = async (sinId: string) => {
    // Encontrar o pecado para verificar se veio do exame
    const sinToRemove = mySins.find((sin) => sin.id === sinId);

    // Remover da lista de pecados
    const updatedSins = mySins.filter((sin) => sin.id !== sinId);
    await saveMySins(updatedSins);
    setMySins(updatedSins);

    // Se o pecado veio do exame, desmarcar no exame também
    if (sinToRemove?.source === 'exam') {
      // Carregar o exame do storage (pode não estar em memória)
      const currentExam = examState || await getExamState();

      if (currentExam) {
        const updatedExam = currentExam.map((category) => ({
          ...category,
          sins: category.sins.map((sin) =>
            sin.description === sinToRemove.description
              ? { ...sin, checked: false }
              : sin
          ),
        }));
        await saveExamState(updatedExam);
        setExamStateLocal(updatedExam);
      }
    }
  };

  const clearAllSins = async () => {
    await clearMySins();
    setMySins([]);
  };

  const saveExam = async (exam: ExamCategory[]) => {
    await saveExamState(exam);
    setExamStateLocal(exam);
  };

  const loadExam = async (): Promise<ExamCategory[] | null> => {
    const exam = await getExamState();
    setExamStateLocal(exam);
    return exam;
  };

  const registerConfession = async (notes?: string) => {
    const confession: Confession = {
      id: Crypto.randomUUID(),
      date: new Date().toISOString(),
      sinsCount: mySins.length,
      sins: mySins.map((sin) => sin.description),
      notes,
    };

    const updatedConfessions = [confession, ...confessions];
    await saveConfessions(updatedConfessions);
    setConfessions(updatedConfessions);

    // Atualizar última confissão
    const now = new Date().toISOString();
    await saveLastConfession(now);
    setLastConfessionState(now);

    // Limpar pecados e exame
    await clearAllSins();
    await clearExamState();
    setExamStateLocal(null);

    // Adicionar XP (50 pontos por confissão)
    await addXp(50);
  };

  const setNextConfessionDate = async (date: string) => {
    await saveNextConfession(date);
    setNextConfessionState(date);
  };

  const resetUserData = () => {
    setUser(null);
    setConfessions([]);
    setMySins([]);
    setLastConfessionState(null);
    setNextConfessionState(null);
    setExamStateLocal(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        confessions,
        mySins,
        lastConfession,
        nextConfession,
        examState,
        isLoading,
        createUser,
        updateUser,
        addXp,
        loadUserData,
        addSin,
        removeSin,
        clearAllSins,
        saveExam,
        loadExam,
        registerConfession,
        setNextConfessionDate,
        resetUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextData => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
