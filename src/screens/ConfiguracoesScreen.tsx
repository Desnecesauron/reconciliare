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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import {
  Avatar,
  CustomButton,
  ThemeSelector,
  LanguageSelector,
} from '../components';
import { ThemeType, LanguageType } from '../types';

export const ConfiguracoesScreen: React.FC = () => {
  const { colors, theme, setTheme } = useTheme();
  const { user, updateUser, setNextConfessionDate } = useUser();
  const { resetPin } = useAuth();
  const navigation = useNavigation();

  const [name, setName] = useState(user?.name || '');
  const [currentPin, setCurrentPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>(theme);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>(
    user?.language || 'pt'
  );

  const handleThemeChange = async (newTheme: ThemeType) => {
    setSelectedTheme(newTheme);
    await setTheme(newTheme);
    await updateUser({ theme: newTheme });
  };

  const handleLanguageChange = async (newLanguage: LanguageType) => {
    setSelectedLanguage(newLanguage);
    await updateUser({ language: newLanguage });
  };

  const handleSave = async () => {
    if (name.trim() !== user?.name) {
      await updateUser({ name: name.trim() });
    }

    if (newPin && newPin.length === 4) {
      await resetPin(newPin);
      Alert.alert('Sucesso', 'PIN atualizado com sucesso!');
      setCurrentPin('');
      setNewPin('');
    }

    Alert.alert('Sucesso', 'Configurações salvas!');
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
          Configurações
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
              <Text style={[styles.label, { color: colors.textLight }]}>Nome</Text>
              <TextInput
                style={[
                  styles.input,
                  { color: colors.text, borderBottomColor: colors.primary },
                ]}
                value={name}
                onChangeText={setName}
                placeholder="Seu nome"
                placeholderTextColor={colors.textLight}
              />
            </View>
          </View>
        </View>

        {/* PIN */}
        <View style={styles.section}>
          <View style={styles.inputRow}>
            <View style={styles.pinIcon}>
              <Text style={[styles.pinIconText, { color: colors.text }]}>PIN</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: colors.textLight }]}>Senha</Text>
              <TextInput
                style={[
                  styles.input,
                  { color: colors.text, borderBottomColor: colors.border },
                ]}
                value={currentPin}
                onChangeText={setCurrentPin}
                placeholder="Senha atual"
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
              <Text style={[styles.pinIconText, { color: colors.text }]}>PIN</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: colors.textLight }]}>Nova Senha</Text>
              <TextInput
                style={[
                  styles.input,
                  { color: colors.text, borderBottomColor: colors.border },
                ]}
                value={newPin}
                onChangeText={setNewPin}
                placeholder="Nova senha (4 dígitos)"
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
            label="Temas:"
            selected={selectedTheme}
            onSelect={handleThemeChange}
          />
        </View>

        {/* Idiomas */}
        <View style={styles.themeSection}>
          <LanguageSelector
            label="Idiomas:"
            selected={selectedLanguage}
            onSelect={handleLanguageChange}
          />
        </View>

        {/* Botão Salvar */}
        <CustomButton
          title="ATUALIZAR"
          onPress={handleSave}
          style={styles.saveButton}
        />
      </ScrollView>
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
});
