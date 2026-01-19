// Tela de Cadastro

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { useUser } from '../../contexts/UserContext';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  Avatar,
  CustomButton,
  ThemeSelector,
  LanguageSelector,
  PinInput,
} from '../../components';
import { ThemeType, LanguageType } from '../../types';
import i18n from '../../i18n';
import {
  selectBackupFile,
  validateBackupFormat,
  importBackup,
} from '../../services/backup';
import { setEncryptionKeyFromPin, saveLanguage } from '../../services/storage';

export const CadastroScreen: React.FC = () => {
  const { colors, setTheme } = useTheme();
  const { register, registerFromBackup } = useAuth();
  const { createUser, loadUserData } = useUser();
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>('purple');
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>('pt');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Estados para importar backup
  const [importModalVisible, setImportModalVisible] = useState(false);
  const [importPin, setImportPin] = useState('');
  const [backupContent, setBackupContent] = useState<string | null>(null);
  const [importLoading, setImportLoading] = useState(false);

  const handleThemeChange = (theme: ThemeType) => {
    setSelectedTheme(theme);
    setTheme(theme);
  };

  const handleLanguageChange = (language: LanguageType) => {
    setSelectedLanguage(language);
    i18n.locale = language;
  };

  const handleNext = () => {
    if (step === 1) {
      if (!name.trim()) {
        Alert.alert(t('common.error'), t('auth.errorEmptyName'));
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (pin.length !== 4) {
        Alert.alert(t('common.error'), t('auth.errorPinLength'));
        return;
      }
      if (pin !== confirmPin) {
        Alert.alert(t('common.error'), t('auth.errorPinMatch'));
        return;
      }
      handleRegister();
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      // Configura a chave de criptografia ANTES de salvar dados do usuário
      await setEncryptionKeyFromPin(pin);
      await createUser(name.trim(), selectedTheme, selectedLanguage);
      // Salva o idioma separadamente para carregar antes do login
      await saveLanguage(selectedLanguage);
      await register(pin);
    } catch (error) {
      Alert.alert(t('common.error'), t('auth.errorRegister'));
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Funções de importação de backup
  const handleImportPress = async () => {
    try {
      const result = await selectBackupFile();
      if (!result) return;

      if ('error' in result) {
        if (result.error === 'invalid_extension') {
          Alert.alert(t('common.error'), t('settings.importErrorExtension'));
          return;
        }
      }

      const { content } = result;
      const backup = validateBackupFormat(content);
      if (!backup) {
        Alert.alert(t('common.error'), t('settings.importErrorFormat'));
        return;
      }

      setBackupContent(content);
      setImportPin('');
      setImportModalVisible(true);
    } catch (error) {
      Alert.alert(t('common.error'), t('settings.importErrorUnknown'));
    }
  };

  const handleImportConfirm = async () => {
    if (importPin.length !== 4 || !backupContent) return;

    setImportLoading(true);
    try {
      const result = await importBackup(backupContent, importPin);
      setImportModalVisible(false);

      if (result.success) {
        // Carrega os dados do usuário (a chave já foi configurada no importBackup)
        await loadUserData();
        // Registra e autentica o usuário
        await registerFromBackup(importPin);
        Alert.alert(t('common.success'), t('auth.restoreSuccess'));
      } else if (result.error === 'wrong_password') {
        Alert.alert(t('common.error'), t('settings.importErrorPassword'));
      } else if (result.error === 'invalid_format') {
        Alert.alert(t('common.error'), t('settings.importErrorFormat'));
      } else {
        Alert.alert(t('common.error'), t('settings.importErrorUnknown'));
      }
    } catch (error) {
      Alert.alert(t('common.error'), t('settings.importErrorUnknown'));
    } finally {
      setImportLoading(false);
      setImportPin('');
      setBackupContent(null);
    }
  };

  const handleImportCancel = () => {
    setImportModalVisible(false);
    setImportPin('');
    setBackupContent(null);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <Text style={[styles.headerTitle, { color: colors.textOnPrimary }]}>
          {t('auth.register')}
        </Text>
      </View>

      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {step === 1 && (
          <>
            <Avatar size={100} editable name={name} />

            <View style={styles.inputContainer}>
              <View style={styles.inputRow}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>👤</Text>
                </View>
                <TextInput
                  style={[
                    styles.input,
                    {
                      color: colors.text,
                      borderBottomColor: colors.primary,
                    },
                  ]}
                  placeholder={t('auth.name')}
                  placeholderTextColor={colors.textLight}
                  value={name}
                  onChangeText={setName}
                />
              </View>
            </View>

            <View style={styles.section}>
              <ThemeSelector
                label={t('auth.themes')}
                selected={selectedTheme}
                onSelect={handleThemeChange}
              />
            </View>

            <View style={styles.section}>
              <LanguageSelector
                label={t('auth.languages')}
                selected={selectedLanguage}
                onSelect={handleLanguageChange}
              />
            </View>
          </>
        )}

        {step === 2 && (
          <>
            <Text style={[styles.stepTitle, { color: colors.text }]}>
              {t('auth.createPin')}
            </Text>
            <Text style={[styles.stepDescription, { color: colors.textLight }]}>
              {t('auth.pinDescription')}
            </Text>

            <View style={styles.pinSection}>
              <Text style={[styles.pinLabel, { color: colors.text }]}>
                {t('auth.enterPin')}
              </Text>
              <PinInput value={pin} onChange={setPin} autoFocus />
            </View>

            <View style={styles.pinSection}>
              <Text style={[styles.pinLabel, { color: colors.text }]}>
                {t('auth.confirmPin')}
              </Text>
              <PinInput value={confirmPin} onChange={setConfirmPin} />
            </View>
          </>
        )}

        <CustomButton
          title={step === 1 ? t('auth.nextButton') : t('auth.registerButton')}
          onPress={handleNext}
          loading={loading}
          style={styles.button}
        />

        {step === 2 && (
          <CustomButton
            title={t('auth.backButton')}
            onPress={() => setStep(1)}
            variant="outline"
            style={styles.backButton}
          />
        )}

        {/* Opção de importar backup */}
        {step === 1 && (
          <View style={styles.importSection}>
            <Text style={[styles.importLabel, { color: colors.textLight }]}>
              {t('auth.haveBackup')}
            </Text>
            <TouchableOpacity
              style={[styles.importButton, { borderColor: colors.primary }]}
              onPress={handleImportPress}
            >
              <Ionicons name="cloud-download-outline" size={20} color={colors.primary} />
              <Text style={[styles.importButtonText, { color: colors.primary }]}>
                {t('auth.restoreBackup')}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* Modal de PIN para importar */}
      <Modal
        visible={importModalVisible}
        transparent
        animationType="fade"
        onRequestClose={handleImportCancel}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              {t('settings.enterPinToImport')}
            </Text>

            <View style={styles.pinInputContainer}>
              <PinInput
                value={importPin}
                onChange={setImportPin}
                autoFocus
              />
            </View>

            {importLoading ? (
              <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
            ) : (
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton, { borderColor: colors.border }]}
                  onPress={handleImportCancel}
                >
                  <Text style={[styles.modalButtonText, { color: colors.textLight }]}>
                    {t('common.cancel')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.modalButton,
                    styles.confirmButton,
                    { backgroundColor: importPin.length === 4 ? colors.primary : colors.border },
                  ]}
                  onPress={handleImportConfirm}
                  disabled={importPin.length !== 4}
                >
                  <Text style={[styles.modalButtonText, { color: '#FFFFFF' }]}>
                    {t('common.confirm')}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
    paddingBottom: 40,
  },
  inputContainer: {
    marginTop: 24,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 12,
  },
  iconText: {
    fontSize: 24,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  section: {
    marginTop: 32,
  },
  button: {
    marginTop: 40,
  },
  backButton: {
    marginTop: 12,
  },
  stepTitle: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 32,
  },
  pinSection: {
    marginBottom: 24,
  },
  pinLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
    textAlign: 'center',
  },
  // Estilos para importação
  importSection: {
    marginTop: 40,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
  },
  importLabel: {
    fontSize: 14,
    marginBottom: 12,
  },
  importButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 8,
    gap: 8,
  },
  importButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  // Estilos do modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalContent: {
    width: '100%',
    borderRadius: 12,
    padding: 24,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
  },
  pinInputContainer: {
    marginBottom: 24,
  },
  loader: {
    marginVertical: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    borderWidth: 1,
  },
  confirmButton: {},
  modalButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
