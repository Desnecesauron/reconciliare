// Serviço de backup e restauração de dados

import { Paths, File } from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as DocumentPicker from 'expo-document-picker';
import CryptoJS from 'crypto-js';
import {
  getUser,
  saveUser,
  getConfessions,
  saveConfessions,
  getMySins,
  saveMySins,
  getExamState,
  saveExamState,
  getLastConfession,
  saveLastConfession,
  getNextConfession,
  saveNextConfession,
} from './storage';

interface BackupData {
  version: number;
  createdAt: string;
  user: any;
  confessions: any[];
  mySins: any[];
  examState: any[] | null;
  lastConfession: string | null;
  nextConfession: string | null;
}

interface EncryptedBackup {
  version: number;
  encrypted: string;
  checksum: string;
}

const BACKUP_VERSION = 1;

// Gera checksum para verificar integridade
const generateChecksum = (data: string): string => {
  return CryptoJS.SHA256(data).toString().substring(0, 16);
};

// Criptografa dados com a senha (PIN)
const encryptBackup = (data: BackupData, password: string): EncryptedBackup => {
  const jsonData = JSON.stringify(data);
  const encrypted = CryptoJS.AES.encrypt(jsonData, password).toString();
  const checksum = generateChecksum(jsonData);

  return {
    version: BACKUP_VERSION,
    encrypted,
    checksum,
  };
};

// Descriptografa dados com a senha (PIN)
const decryptBackup = (backup: EncryptedBackup, password: string): BackupData | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(backup.encrypted, password);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted) {
      return null; // Senha incorreta
    }

    // Verifica checksum
    const checksum = generateChecksum(decrypted);
    if (checksum !== backup.checksum) {
      console.warn('Checksum inválido no backup');
      return null;
    }

    return JSON.parse(decrypted);
  } catch (error) {
    console.error('Erro ao descriptografar backup:', error);
    return null;
  }
};

// Coleta todos os dados para backup
export const collectBackupData = async (): Promise<BackupData> => {
  const [user, confessions, mySins, examState, lastConfession, nextConfession] =
    await Promise.all([
      getUser(),
      getConfessions(),
      getMySins(),
      getExamState(),
      getLastConfession(),
      getNextConfession(),
    ]);

  return {
    version: BACKUP_VERSION,
    createdAt: new Date().toISOString(),
    user,
    confessions,
    mySins,
    examState,
    lastConfession,
    nextConfession,
  };
};

// Exporta backup criptografado
export const exportBackup = async (password: string): Promise<boolean> => {
  try {
    // Coleta dados
    const data = await collectBackupData();

    // Criptografa
    const encryptedBackup = encryptBackup(data, password);

    // Gera nome do arquivo com data
    const date = new Date().toISOString().split('T')[0];
    const fileName = `reconciliare_backup_${date}.rcl`;
    const file = new File(Paths.cache, fileName);

    // Salva arquivo
    await file.write(JSON.stringify(encryptedBackup, null, 2));

    // Verifica se compartilhamento está disponível
    const isAvailable = await Sharing.isAvailableAsync();
    if (!isAvailable) {
      throw new Error('Compartilhamento não disponível neste dispositivo');
    }

    // Compartilha arquivo (.rcl é JSON internamente)
    await Sharing.shareAsync(file.uri, {
      mimeType: 'application/json',
      dialogTitle: 'Exportar backup do Reconciliare',
    });

    // Limpa arquivo temporário
    await file.delete();

    return true;
  } catch (error) {
    console.error('Erro ao exportar backup:', error);
    throw error;
  }
};

// Seleciona arquivo de backup
export const selectBackupFile = async (): Promise<{ content: string } | { error: 'invalid_extension' } | null> => {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      type: '*/*',
      copyToCacheDirectory: true,
    });

    if (result.canceled || !result.assets || result.assets.length === 0) {
      return null;
    }

    const selectedFile = result.assets[0];

    // Validar extensão .rcl
    if (!selectedFile.name?.toLowerCase().endsWith('.rcl')) {
      return { error: 'invalid_extension' };
    }

    const file = new File(selectedFile.uri);
    const content = await file.text();

    return { content };
  } catch (error) {
    console.error('Erro ao selecionar arquivo:', error);
    throw error;
  }
};

// Valida formato do backup
export const validateBackupFormat = (content: string): EncryptedBackup | null => {
  try {
    const backup = JSON.parse(content);

    if (
      typeof backup.version !== 'number' ||
      typeof backup.encrypted !== 'string' ||
      typeof backup.checksum !== 'string'
    ) {
      return null;
    }

    return backup as EncryptedBackup;
  } catch {
    return null;
  }
};

// Importa backup
export const importBackup = async (
  encryptedContent: string,
  password: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    // Valida formato
    const backup = validateBackupFormat(encryptedContent);
    if (!backup) {
      return { success: false, error: 'invalid_format' };
    }

    // Descriptografa
    const data = decryptBackup(backup, password);
    if (!data) {
      return { success: false, error: 'wrong_password' };
    }

    // Restaura dados
    const promises: Promise<void>[] = [];

    if (data.user) {
      promises.push(saveUser(data.user));
    }
    if (data.confessions) {
      promises.push(saveConfessions(data.confessions));
    }
    if (data.mySins) {
      promises.push(saveMySins(data.mySins));
    }
    if (data.examState) {
      promises.push(saveExamState(data.examState));
    }
    if (data.lastConfession) {
      promises.push(saveLastConfession(data.lastConfession));
    }
    if (data.nextConfession) {
      promises.push(saveNextConfession(data.nextConfession));
    }

    await Promise.all(promises);

    return { success: true };
  } catch (error) {
    console.error('Erro ao importar backup:', error);
    return { success: false, error: 'unknown' };
  }
};
