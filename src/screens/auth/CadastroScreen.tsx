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
} from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { useUser } from '../../contexts/UserContext';
import {
  Avatar,
  CustomButton,
  ThemeSelector,
  LanguageSelector,
  PinInput,
} from '../../components';
import { ThemeType, LanguageType } from '../../types';

export const CadastroScreen: React.FC = () => {
  const { colors, setTheme } = useTheme();
  const { register } = useAuth();
  const { createUser } = useUser();

  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>('purple');
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>('pt');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleThemeChange = (theme: ThemeType) => {
    setSelectedTheme(theme);
    setTheme(theme);
  };

  const handleNext = () => {
    if (step === 1) {
      if (!name.trim()) {
        Alert.alert('Erro', 'Por favor, insira seu nome.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (pin.length !== 4) {
        Alert.alert('Erro', 'O PIN deve ter 4 dígitos.');
        return;
      }
      if (pin !== confirmPin) {
        Alert.alert('Erro', 'Os PINs não coincidem.');
        return;
      }
      handleRegister();
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      await createUser(name.trim(), selectedTheme, selectedLanguage);
      await register(pin);
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao criar sua conta.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <Text style={[styles.headerTitle, { color: colors.textOnPrimary }]}>
          CADASTRO
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
                  placeholder="Nome"
                  placeholderTextColor={colors.textLight}
                  value={name}
                  onChangeText={setName}
                />
              </View>
            </View>

            <View style={styles.section}>
              <ThemeSelector
                label="Temas:"
                selected={selectedTheme}
                onSelect={handleThemeChange}
              />
            </View>

            <View style={styles.section}>
              <LanguageSelector
                label="Idiomas:"
                selected={selectedLanguage}
                onSelect={setSelectedLanguage}
              />
            </View>
          </>
        )}

        {step === 2 && (
          <>
            <Text style={[styles.stepTitle, { color: colors.text }]}>
              Crie seu PIN de segurança
            </Text>
            <Text style={[styles.stepDescription, { color: colors.textLight }]}>
              Este PIN será usado para proteger seus dados
            </Text>

            <View style={styles.pinSection}>
              <Text style={[styles.pinLabel, { color: colors.text }]}>
                Digite o PIN:
              </Text>
              <PinInput value={pin} onChange={setPin} autoFocus />
            </View>

            <View style={styles.pinSection}>
              <Text style={[styles.pinLabel, { color: colors.text }]}>
                Confirme o PIN:
              </Text>
              <PinInput value={confirmPin} onChange={setConfirmPin} />
            </View>
          </>
        )}

        <CustomButton
          title={step === 1 ? 'PRÓXIMO' : 'CADASTRAR'}
          onPress={handleNext}
          loading={loading}
          style={styles.button}
        />

        {step === 2 && (
          <CustomButton
            title="VOLTAR"
            onPress={() => setStep(1)}
            variant="outline"
            style={styles.backButton}
          />
        )}
      </ScrollView>
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
});
