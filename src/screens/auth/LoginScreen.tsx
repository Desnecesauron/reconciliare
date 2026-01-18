// Tela de Login

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { useUser } from '../../contexts/UserContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { CustomButton } from '../../components';

export const LoginScreen: React.FC = () => {
  const { colors, resetTheme } = useTheme();
  const { login, clearAll } = useAuth();
  const { resetUserData } = useUser();
  const { t } = useLanguage();

  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (pin.length === 4) {
      handleLogin();
    }
  }, [pin]);

  const handlePinChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '').slice(0, 4);
    setPin(numericValue);
    setError('');
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const success = await login(pin);
      if (!success) {
        setError(t('auth.incorrectPin'));
        setPin('');
      }
    } catch (error) {
      setError(t('auth.errorOccurred'));
      setPin('');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPin = () => {
    Alert.alert(
      t('auth.forgotPinTitle'),
      t('auth.forgotPinMessage'),
      [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('auth.reset'),
          style: 'destructive',
          onPress: async () => {
            await clearAll();
            resetUserData();
            resetTheme();
            Alert.alert(t('common.success'), t('auth.resetSuccess'));
          },
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={[styles.card, { backgroundColor: '#4A4A4A' }]}>
        {/* Logo */}
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* PIN Input */}
        <View style={styles.pinContainer}>
          <Text style={styles.pinLabel}>{t('auth.pin')}</Text>
          <TextInput
            style={[styles.pinInput, { borderBottomColor: colors.textLight }]}
            value={pin}
            onChangeText={handlePinChange}
            keyboardType="numeric"
            maxLength={4}
            secureTextEntry
            autoFocus
            placeholder={t('auth.pinPlaceholder')}
            placeholderTextColor={colors.textLight}
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>

        {/* Botões */}
        <CustomButton
          title={t('auth.login')}
          onPress={handleLogin}
          loading={loading}
          disabled={pin.length !== 4}
          style={styles.loginButton}
        />

        <CustomButton
          title={t('auth.forgotPin')}
          onPress={handleForgotPin}
          variant="outline"
          style={styles.forgotButton}
          textStyle={{ color: colors.primary }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 350,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 24,
  },
  pinContainer: {
    width: '100%',
    marginBottom: 20,
  },
  pinLabel: {
    color: '#9CA3AF',
    fontSize: 14,
    marginBottom: 4,
  },
  pinInput: {
    fontSize: 24,
    color: '#FFFFFF',
    borderBottomWidth: 1,
    paddingVertical: 8,
    letterSpacing: 8,
    textAlign: 'center',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
  loginButton: {
    width: '100%',
    marginBottom: 12,
  },
  forgotButton: {
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
});
