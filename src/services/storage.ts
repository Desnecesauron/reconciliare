// Serviço de armazenamento local

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { User, Confession, ExamCategory, Sin } from '../types';

const KEYS = {
  USER: '@reconciliare:user',
  CONFESSIONS: '@reconciliare:confessions',
  EXAM_STATE: '@reconciliare:exam_state',
  MY_SINS: '@reconciliare:my_sins',
  LAST_CONFESSION: '@reconciliare:last_confession',
  NEXT_CONFESSION: '@reconciliare:next_confession',
  PIN: 'reconciliare_pin',
  IS_REGISTERED: '@reconciliare:is_registered',
};

// Funções para PIN (armazenamento seguro)
export const savePin = async (pin: string): Promise<void> => {
  await SecureStore.setItemAsync(KEYS.PIN, pin);
};

export const getPin = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync(KEYS.PIN);
};

export const deletePin = async (): Promise<void> => {
  await SecureStore.deleteItemAsync(KEYS.PIN);
};

// Funções para User
export const saveUser = async (user: User): Promise<void> => {
  await AsyncStorage.setItem(KEYS.USER, JSON.stringify(user));
};

export const getUser = async (): Promise<User | null> => {
  const data = await AsyncStorage.getItem(KEYS.USER);
  return data ? JSON.parse(data) : null;
};

export const deleteUser = async (): Promise<void> => {
  await AsyncStorage.removeItem(KEYS.USER);
};

// Funções para Confissões
export const saveConfessions = async (confessions: Confession[]): Promise<void> => {
  await AsyncStorage.setItem(KEYS.CONFESSIONS, JSON.stringify(confessions));
};

export const getConfessions = async (): Promise<Confession[]> => {
  const data = await AsyncStorage.getItem(KEYS.CONFESSIONS);
  return data ? JSON.parse(data) : [];
};

// Funções para Estado do Exame
export const saveExamState = async (exam: ExamCategory[]): Promise<void> => {
  await AsyncStorage.setItem(KEYS.EXAM_STATE, JSON.stringify(exam));
};

export const getExamState = async (): Promise<ExamCategory[] | null> => {
  const data = await AsyncStorage.getItem(KEYS.EXAM_STATE);
  return data ? JSON.parse(data) : null;
};

export const clearExamState = async (): Promise<void> => {
  await AsyncStorage.removeItem(KEYS.EXAM_STATE);
};

// Funções para Meus Pecados
export const saveMySins = async (sins: Sin[]): Promise<void> => {
  await AsyncStorage.setItem(KEYS.MY_SINS, JSON.stringify(sins));
};

export const getMySins = async (): Promise<Sin[]> => {
  const data = await AsyncStorage.getItem(KEYS.MY_SINS);
  return data ? JSON.parse(data) : [];
};

export const clearMySins = async (): Promise<void> => {
  await AsyncStorage.removeItem(KEYS.MY_SINS);
};

// Funções para datas de confissão
export const saveLastConfession = async (date: string): Promise<void> => {
  await AsyncStorage.setItem(KEYS.LAST_CONFESSION, date);
};

export const getLastConfession = async (): Promise<string | null> => {
  return await AsyncStorage.getItem(KEYS.LAST_CONFESSION);
};

export const saveNextConfession = async (date: string): Promise<void> => {
  await AsyncStorage.setItem(KEYS.NEXT_CONFESSION, date);
};

export const getNextConfession = async (): Promise<string | null> => {
  return await AsyncStorage.getItem(KEYS.NEXT_CONFESSION);
};

// Funções para registro
export const setIsRegistered = async (value: boolean): Promise<void> => {
  await AsyncStorage.setItem(KEYS.IS_REGISTERED, JSON.stringify(value));
};

export const getIsRegistered = async (): Promise<boolean> => {
  const data = await AsyncStorage.getItem(KEYS.IS_REGISTERED);
  return data ? JSON.parse(data) : false;
};

// Limpar todos os dados
export const clearAllData = async (): Promise<void> => {
  await AsyncStorage.multiRemove([
    KEYS.USER,
    KEYS.CONFESSIONS,
    KEYS.EXAM_STATE,
    KEYS.MY_SINS,
    KEYS.LAST_CONFESSION,
    KEYS.NEXT_CONFESSION,
    KEYS.IS_REGISTERED,
  ]);
  await deletePin();
};
