// Tela de Configurações

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Avatar,
  CustomButton,
  ThemeSelector,
  LanguageSelector,
  PinInput,
} from '../components';
import { ThemeType, LanguageType } from '../types';
import i18n from '../i18n';
import {
  exportBackup,
  selectBackupFile,
  validateBackupFormat,
  importBackup,
} from '../services/backup';

export const ConfiguracoesScreen: React.FC = () => {
  const { colors, theme, setTheme } = useTheme();
  const { user, updateUser } = useUser();
  const { resetPin } = useAuth();
  const { t } = useLanguage();
  const navigation = useNavigation();

  const [name, setName] = useState(user?.name || '');
  const [currentPin, setCurrentPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>(theme);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>(
    user?.language || 'pt'
  );

  // Estados para backup
  const [backupModalVisible, setBackupModalVisible] = useState(false);
  const [backupMode, setBackupMode] = useState<'export' | 'import'>('export');
  const [backupPin, setBackupPin] = useState('');
  const [backupContent, setBackupContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleThemeChange = async (newTheme: ThemeType) => {
    setSelectedTheme(newTheme);
    await setTheme(newTheme);
    await updateUser({ theme: newTheme });
  };

  const handleLanguageChange = async (newLanguage: LanguageType) => {
    setSelectedLanguage(newLanguage);
    i18n.locale = newLanguage;
    await updateUser({ language: newLanguage });
  };

  const handleSave = async () => {
    if (name.trim() !== user?.name) {
      await updateUser({ name: name.trim() });
    }

    if (newPin && newPin.length === 4) {
      await resetPin(newPin);
      Alert.alert(t('common.success'), t('settings.pinUpdated'));
      setCurrentPin('');
      setNewPin('');
    }

    Alert.alert(t('common.success'), t('settings.saved'));
  };

  // Funções de backup
  const handleExportPress = () => {
    setBackupMode('export');
    setBackupPin('');
    setBackupModalVisible(true);
  };

  const handleImportPress = async () => {
    try {
      const result = await selectBackupFile();
      if (!result) return;

      // Verificar se é erro de extensão
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
      setBackupMode('import');
      setBackupPin('');
      setBackupModalVisible(true);
    } catch (error) {
      Alert.alert(t('common.error'), t('settings.importErrorUnknown'));
    }
  };

  const handleBackupConfirm = async () => {
    if (backupPin.length !== 4) return;

    setLoading(true);
    try {
      if (backupMode === 'export') {
        await exportBackup(backupPin);
        setBackupModalVisible(false);
        Alert.alert(t('common.success'), t('settings.exportSuccess'));
      } else if (backupContent) {
        const result = await importBackup(backupContent, backupPin);
        setBackupModalVisible(false);

        if (result.success) {
          Alert.alert(t('common.success'), t('settings.importSuccess'));
        } else if (result.error === 'wrong_password') {
          Alert.alert(t('common.error'), t('settings.importErrorPassword'));
        } else if (result.error === 'invalid_format') {
          Alert.alert(t('common.error'), t('settings.importErrorFormat'));
        } else {
          Alert.alert(t('common.error'), t('settings.importErrorUnknown'));
        }
      }
    } catch (error) {
      Alert.alert(t('common.error'), t('settings.importErrorUnknown'));
    } finally {
      setLoading(false);
      setBackupPin('');
      setBackupContent(null);
    }
  };

  const handleBackupCancel = () => {
    setBackupModalVisible(false);
    setBackupPin('');
    setBackupContent(null);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color={colors.textOnPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textOnPrimary }]}>
          {t('settings.title')}
        </Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Avatar */}
        <Avatar size={100} editable name={name} />

        {/* Nome */}
        <View style={styles.section}>
          <View style={styles.inputRow}>
            <Ionicons name="person-outline" size={24} color={colors.textLight} />
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: colors.textLight }]}>{t('settings.name')}</Text>
              <TextInput
                style={[
                  styles.input,
                  { color: colors.text, borderBottomColor: colors.primary },
                ]}
                value={name}
                onChangeText={setName}
                placeholder={t('settings.namePlaceholder')}
                placeholderTextColor={colors.textLight}
              />
            </View>
          </View>
        </View>

        {/* PIN */}
        <View style={styles.section}>
          <View style={styles.inputRow}>
            <View style={styles.pinIcon}>
              <Text style={styles.pinIconText}>PIN</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: colors.textLight }]}>{t('settings.password')}</Text>
              <TextInput
                style={[
                  styles.input,
                  { color: colors.text, borderBottomColor: colors.border },
                ]}
                value={currentPin}
                onChangeText={setCurrentPin}
                placeholder={t('settings.currentPassword')}
                placeholderTextColor={colors.textLight}
                secureTextEntry
                maxLength={4}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.inputRow}>
            <View style={styles.pinIcon}>
              <Text style={styles.pinIconText}>PIN</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: colors.textLight }]}>{t('settings.newPassword')}</Text>
              <TextInput
                style={[
                  styles.input,
                  { color: colors.text, borderBottomColor: colors.border },
                ]}
                value={newPin}
                onChangeText={setNewPin}
                placeholder={t('settings.newPasswordPlaceholder')}
                placeholderTextColor={colors.textLight}
                secureTextEntry
                maxLength={4}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        {/* Temas */}
        <View style={styles.themeSection}>
          <ThemeSelector
            label={t('settings.themes')}
            selected={selectedTheme}
            onSelect={handleThemeChange}
          />
        </View>

        {/* Idiomas */}
        <View style={styles.themeSection}>
          <LanguageSelector
            label={t('settings.languages')}
            selected={selectedLanguage}
            onSelect={handleLanguageChange}
          />
        </View>

        {/* Botão Salvar */}
        <CustomButton
          title={t('settings.update')}
          onPress={handleSave}
          style={styles.saveButton}
        />

        {/* Seção Backup */}
        <View style={styles.backupSection}>
          <Text style={[styles.backupTitle, { color: colors.text }]}>
            {t('settings.backup')}
          </Text>

          <TouchableOpacity
            style={[styles.backupButton, { borderColor: colors.border }]}
            onPress={handleExportPress}
          >
            <View style={styles.backupButtonContent}>
              <Ionicons name="cloud-upload-outline" size={24} color={colors.primary} />
              <View style={styles.backupButtonText}>
                <Text style={[styles.backupButtonTitle, { color: colors.text }]}>
                  {t('settings.exportData')}
                </Text>
                <Text style={[styles.backupButtonDescription, { color: colors.textLight }]}>
                  {t('settings.exportDescription')}
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.textLight} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.backupButton, { borderColor: colors.border }]}
            onPress={handleImportPress}
          >
            <View style={styles.backupButtonContent}>
              <Ionicons name="cloud-download-outline" size={24} color={colors.primary} />
              <View style={styles.backupButtonText}>
                <Text style={[styles.backupButtonTitle, { color: colors.text }]}>
                  {t('settings.importData')}
                </Text>
                <Text style={[styles.backupButtonDescription, { color: colors.textLight }]}>
                  {t('settings.importDescription')}
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.textLight} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal de PIN para backup */}
      <Modal
        visible={backupModalVisible}
        transparent
        animationType="fade"
        onRequestClose={handleBackupCancel}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              {backupMode === 'export'
                ? t('settings.enterPinToExport')
                : t('settings.enterPinToImport')}
            </Text>

            <View style={styles.pinInputContainer}>
              <PinInput
                value={backupPin}
                onChange={setBackupPin}
                autoFocus
              />
            </View>

            {loading ? (
              <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
            ) : (
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton, { borderColor: colors.border }]}
                  onPress={handleBackupCancel}
                >
                  <Text style={[styles.modalButtonText, { color: colors.textLight }]}>
                    {t('common.cancel')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.modalButton,
                    styles.confirmButton,
                    { backgroundColor: backupPin.length === 4 ? colors.primary : colors.border },
                  ]}
                  onPress={handleBackupConfirm}
                  disabled={backupPin.length !== 4}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  placeholder: {
    width: 32,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
    paddingBottom: 40,
  },
  section: {
    marginTop: 24,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinIcon: {
    width: 40,
    height: 24,
    backgroundColor: '#1F2937',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinIconText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  inputContainer: {
    flex: 1,
    marginLeft: 12,
  },
  label: {
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  themeSection: {
    marginTop: 32,
  },
  saveButton: {
    marginTop: 40,
  },
  // Backup styles
  backupSection: {
    marginTop: 40,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  backupTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  backupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
  },
  backupButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backupButtonText: {
    marginLeft: 12,
    flex: 1,
  },
  backupButtonTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  backupButtonDescription: {
    fontSize: 12,
    marginTop: 2,
  },
  // Modal styles
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
