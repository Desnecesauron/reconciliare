// Serviço de criptografia para dados sensíveis

import CryptoJS from 'crypto-js';
import * as SecureStore from 'expo-secure-store';

const ENCRYPTION_KEY_NAME = 'reconciliare_encryption_key';

// Gera uma chave aleatória de 256 bits
const generateKey = (): string => {
  return CryptoJS.lib.WordArray.random(32).toString();
};

// Obtém ou cria a chave de criptografia
export const getOrCreateEncryptionKey = async (): Promise<string> => {
  let key = await SecureStore.getItemAsync(ENCRYPTION_KEY_NAME);

  if (!key) {
    key = generateKey();
    await SecureStore.setItemAsync(ENCRYPTION_KEY_NAME, key);
  }

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
