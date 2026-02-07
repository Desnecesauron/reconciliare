// Tela Contribuir

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { CustomButton } from '../components';

const PIX_KEY = '1e80253b-4061-4962-af45-b1d6da19c7f0';
const BUYMEACOFFEE_URL = 'https://buymeacoffee.com/cesar_gomes';

export const ContribuirScreen: React.FC = () => {
  const { colors } = useTheme();
  const { t } = useLanguage();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [copied, setCopied] = useState(false);

  const handleCopyPix = async () => {
    await Clipboard.setStringAsync(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBuyMeACoffee = () => {
    Linking.openURL(BUYMEACOFFEE_URL);
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
          {t('contribute.title')}
        </Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={[styles.contentContainer, { paddingBottom: 20 + insets.bottom }]}
      >
        <Text style={[styles.text, { color: colors.text }]}>
          {t('contribute.text1')}
        </Text>

        <Text style={[styles.text, { color: colors.text }]}>
          {t('contribute.text2')}
        </Text>

        <Text style={[styles.text, { color: colors.text }]}>
          {t('contribute.text3')}
        </Text>

        {/* Seção PIX */}
        <View style={[styles.donationSection, { backgroundColor: colors.surface }]}>
          <View style={styles.sectionHeader}>
            <Ionicons name="qr-code-outline" size={24} color={colors.primary} />
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              PIX
            </Text>
          </View>
          <Text style={[styles.sectionDescription, { color: colors.textLight }]}>
            {t('contribute.pixDescription')}
          </Text>
          <View
            style={[styles.pixKeyContainer, { backgroundColor: colors.background, borderColor: colors.border }]}
          >
            <Text
              style={[styles.pixKey, { color: colors.text }]}
              selectable={true}
            >
              {PIX_KEY}
            </Text>
          </View>
          <CustomButton
            title={copied ? t('contribute.copied') : t('contribute.copyPix')}
            onPress={handleCopyPix}
            style={styles.button}
          />
        </View>

        {/* Seção Buy Me a Coffee */}
        <View style={[styles.donationSection, { backgroundColor: colors.surface }]}>
          <View style={styles.sectionHeader}>
            <Ionicons name="cafe-outline" size={24} color={colors.primary} />
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Buy Me a Coffee
            </Text>
          </View>
          <Text style={[styles.sectionDescription, { color: colors.textLight }]}>
            {t('contribute.coffeeDescription')}
          </Text>
          <CustomButton
            title={t('contribute.buyMeACoffee')}
            onPress={handleBuyMeACoffee}
            style={styles.button}
          />
        </View>

        <Text style={[styles.thankYou, { color: colors.textLight }]}>
          {t('contribute.thankYou')}
        </Text>
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
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 16,
    textAlign: 'justify',
  },
  buttonsContainer: {
    marginTop: 24,
    marginBottom: 24,
  },
  button: {
    marginBottom: 12,
  },
  thankYou: {
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 16,
  },
  donationSection: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  sectionDescription: {
    fontSize: 14,
    marginBottom: 12,
  },
  pixKeyContainer: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 12,
  },
  pixKey: {
    fontSize: 12,
    fontFamily: 'monospace',
    textAlign: 'center',
  },
});
