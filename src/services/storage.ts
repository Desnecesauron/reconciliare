// Serviço de armazenamento local com criptografia

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { User, Confession, ExamCategory, Sin } from '../types';
import {
  getEncryptionKey,
  saveEncryptionKeyFromPin,
  encrypt,
  decrypt,
  clearEncryptionKey,
} from './encryption';

const KEYS = {
  USER: '@reconciliare:user',
  CONFESSIONS: '@reconciliare:confessions',
  EXAM_STATE: '@reconciliare:exam_state',
  MY_SINS: '@reconciliare:my_sins',
  LAST_CONFESSION: '@reconciliare:last_confession',
  NEXT_CONFESSION: '@reconciliare:next_confession',
  CALENDAR_EVENT_ID: '@reconciliare:calendar_event_id',
  PIN: 'reconciliare_pin',
  IS_REGISTERED: '@reconciliare:is_registered',
};

// Cache da chave de criptografia para evitar múltiplas leituras do SecureStore
let encryptionKeyCache: string | null = null;

// Obtém a chave de criptografia (do cache ou do SecureStore)
const getKey = async (): Promise<string | null> => {
  if (!encryptionKeyCache) {
    encryptionKeyCache = await getEncryptionKey();
  }
  return encryptionKeyCache;
};

// Define a chave de criptografia a partir de um PIN (usado durante registro/import)
export const setEncryptionKeyFromPin = async (pin: string): Promise<void> => {
  encryptionKeyCache = await saveEncryptionKeyFromPin(pin);
};

// Salva dado criptografado
const saveEncrypted = async (key: string, value: string): Promise<void> => {
  const encryptionKey = await getKey();
  if (!encryptionKey) {
    throw new Error('Chave de criptografia não disponível');
  }
  const encryptedValue = encrypt(value, encryptionKey);
  await AsyncStorage.setItem(key, encryptedValue);
};

// Salva dado criptografado com uma chave específica (para import)
const saveEncryptedWithKey = async (storageKey: string, value: string, encryptionKey: string): Promise<void> => {
  const encryptedValue = encrypt(value, encryptionKey);
  await AsyncStorage.setItem(storageKey, encryptedValue);
};

// Carrega dado criptografado
const loadEncrypted = async (key: string): Promise<string | null> => {
  const encryptedValue = await AsyncStorage.getItem(key);
  if (!encryptedValue) return null;

  try {
    const encryptionKey = await getKey();
    if (!encryptionKey) {
      console.warn('Chave de criptografia não disponível para:', key);
      return null;
    }
    return decrypt(encryptedValue, encryptionKey);
  } catch (error) {
    // Se falhar ao descriptografar (dados antigos não criptografados), retorna null
    console.warn('Falha ao descriptografar dados, podem ser dados antigos:', key);
    return null;
  }
};

// Funções para PIN (armazenamento seguro nativo)
export const savePin = async (pin: string): Promise<void> => {
  await SecureStore.setItemAsync(KEYS.PIN, pin);
};

export const getPin = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync(KEYS.PIN);
};

export const deletePin = async (): Promise<void> => {
  await SecureStore.deleteItemAsync(KEYS.PIN);
};

// Funções para User (CRIPTOGRAFADO)
export const saveUser = async (user: User): Promise<void> => {
  await saveEncrypted(KEYS.USER, JSON.stringify(user));
};

export const getUser = async (): Promise<User | null> => {
  const data = await loadEncrypted(KEYS.USER);
  return data ? JSON.parse(data) : null;
};

export const deleteUser = async (): Promise<void> => {
  await AsyncStorage.removeItem(KEYS.USER);
};

// Funções para Confissões (CRIPTOGRAFADO)
export const saveConfessions = async (confessions: Confession[]): Promise<void> => {
  await saveEncrypted(KEYS.CONFESSIONS, JSON.stringify(confessions));
};

export const getConfessions = async (): Promise<Confession[]> => {
  const data = await loadEncrypted(KEYS.CONFESSIONS);
  return data ? JSON.parse(data) : [];
};

// Funções para Estado do Exame (CRIPTOGRAFADO)
export const saveExamState = async (exam: ExamCategory[]): Promise<void> => {
  await saveEncrypted(KEYS.EXAM_STATE, JSON.stringify(exam));
};

export const getExamState = async (): Promise<ExamCategory[] | null> => {
  const data = await loadEncrypted(KEYS.EXAM_STATE);
  return data ? JSON.parse(data) : null;
};

export const clearExamState = async (): Promise<void> => {
  await AsyncStorage.removeItem(KEYS.EXAM_STATE);
};

// Funções para Meus Pecados (CRIPTOGRAFADO)
export const saveMySins = async (sins: Sin[]): Promise<void> => {
  await saveEncrypted(KEYS.MY_SINS, JSON.stringify(sins));
};

export const getMySins = async (): Promise<Sin[]> => {
  const data = await loadEncrypted(KEYS.MY_SINS);
  return data ? JSON.parse(data) : [];
};

export const clearMySins = async (): Promise<void> => {
  await AsyncStorage.removeItem(KEYS.MY_SINS);
};

// Funções para datas de confissão (não sensível)
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

// Funções para ID do evento do calendário (não sensível)
export const saveCalendarEventId = async (eventId: string): Promise<void> => {
  await AsyncStorage.setItem(KEYS.CALENDAR_EVENT_ID, eventId);
};

export const getCalendarEventId = async (): Promise<string | null> => {
  return await AsyncStorage.getItem(KEYS.CALENDAR_EVENT_ID);
};

export const clearCalendarEventId = async (): Promise<void> => {
  await AsyncStorage.removeItem(KEYS.CALENDAR_EVENT_ID);
};

// Funções para registro (não sensível)
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
    KEYS.CALENDAR_EVENT_ID,
    KEYS.IS_REGISTERED,
  ]);
  await deletePin();
  await clearEncryptionKey();
  encryptionKeyCache = null;
};
