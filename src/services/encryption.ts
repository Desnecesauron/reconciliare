// Serviço de criptografia para dados sensíveis

import CryptoJS from 'crypto-js';
import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';

const ENCRYPTION_KEY_NAME = 'reconciliare_encryption_key';

// Gera uma chave aleatória de 256 bits usando expo-crypto
const generateKey = async (): Promise<string> => {
  const randomBytes = await Crypto.getRandomBytesAsync(32);
  // Converte bytes para string hexadecimal
  return Array.from(randomBytes)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
};

// Obtém ou cria a chave de criptografia
export const getOrCreateEncryptionKey = async (): Promise<string> => {
  let key = await SecureStore.getItemAsync(ENCRYPTION_KEY_NAME);

  if (!key) {
    key = await generateKey();
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
