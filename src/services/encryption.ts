// Serviço de criptografia para dados sensíveis

import CryptoJS from 'crypto-js';
import * as SecureStore from 'expo-secure-store';

const ENCRYPTION_KEY_NAME = 'reconciliare_encryption_key';
const PIN_KEY = 'reconciliare_pin';
const SALT = 'reconciliare_v1_salt_2024';

// Deriva uma chave a partir do PIN (determinística)
export const deriveKeyFromPin = (pin: string): string => {
  const key = CryptoJS.PBKDF2(pin, SALT, {
    keySize: 256 / 32,
    iterations: 1000,
  });
  return key.toString();
};

// Obtém a chave de criptografia (baseada no PIN)
export const getEncryptionKey = async (): Promise<string | null> => {
  // Primeiro tenta obter a chave salva
  let key = await SecureStore.getItemAsync(ENCRYPTION_KEY_NAME);
  if (key) {
    return key;
  }

  // Se não tem chave salva, tenta derivar do PIN
  const pin = await SecureStore.getItemAsync(PIN_KEY);
  if (pin) {
    key = deriveKeyFromPin(pin);
    // Salva a chave derivada para uso futuro
    await SecureStore.setItemAsync(ENCRYPTION_KEY_NAME, key);
    return key;
  }

  // Sem PIN, sem chave
  return null;
};

// Salva a chave de criptografia derivada do PIN
export const saveEncryptionKeyFromPin = async (pin: string): Promise<string> => {
  const key = deriveKeyFromPin(pin);
  await SecureStore.setItemAsync(ENCRYPTION_KEY_NAME, key);
  return key;
};

// Criptografa um valor
export const encrypt = (value: string, key: string): string => {
  return CryptoJS.AES.encrypt(value, key).toString();
};

// Descriptografa um valor
export const decrypt = (encryptedValue: string, key: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedValue, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};

// Limpa a chave de criptografia (usar apenas ao resetar todos os dados)
export const clearEncryptionKey = async (): Promise<void> => {
  await SecureStore.deleteItemAsync(ENCRYPTION_KEY_NAME);
};
