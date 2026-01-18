// Tela de Ajuda

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export const AjudaScreen: React.FC = () => {
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
          {t('help.title')}
        </Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t('help.firstAccess')}
        </Text>
        <Text style={[styles.text, { color: colors.text }]}>
          {t('help.firstAccessText')}
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t('help.homeScreen')}
        </Text>
        <Text style={[styles.text, { color: colors.text }]}>
          {t('help.homeScreenText')}
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t('help.examConscience')}
        </Text>
        <Text style={[styles.text, { color: colors.text }]}>
          {t('help.examConscienceText')}
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t('help.prayersPreparation')}
        </Text>
        <Text style={[styles.text, { color: colors.text }]}>
          {t('help.prayersPreparationText')}
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t('help.pin')}
        </Text>
        <Text style={[styles.text, { color: colors.text }]}>
          {t('help.pinText')}
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {t('help.settings')}
        </Text>
        <Text style={[styles.text, { color: colors.text }]}>
          {t('help.settingsText')}
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
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'justify',
  },
});
