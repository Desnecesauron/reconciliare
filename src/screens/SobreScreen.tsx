// Tela Sobre

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export const SobreScreen: React.FC = () => {
  const { colors } = useTheme();
  const { t } = useLanguage();
  const navigation = useNavigation();

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
          {t('about.title')}
        </Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={[styles.text, { color: colors.text }]}>
          {t('about.text1')}
        </Text>

        <Text style={[styles.text, { color: colors.text }]}>
          {t('about.text2')}
        </Text>

        <Text style={[styles.text, { color: colors.text }]}>
          {t('about.text3')}
        </Text>

        <Text style={[styles.text, { color: colors.text }]}>
          {t('about.text4')}
        </Text>

        <View style={styles.versionContainer}>
          <Text style={[styles.version, { color: colors.textLight }]}>
            {t('about.version')} 1.0.0
          </Text>
        </View>
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
  text: {
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 16,
    textAlign: 'justify',
  },
  versionContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  version: {
    fontSize: 14,
  },
});
