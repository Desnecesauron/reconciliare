// Tela Sobre

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/cesar-sampaio-gomes',
  github: 'https://github.com/Desnecesauron',
  instagram: 'https://instagram.com/cesinhaa_03',
};

export const SobreScreen: React.FC = () => {
  const { colors } = useTheme();
  const { t } = useLanguage();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

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
        contentContainerStyle={[styles.contentContainer, { paddingBottom: 24 + insets.bottom }]}
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

        <Text style={[styles.version, { color: colors.textLight }]}>
          {t('about.version')} 1.0.5
        </Text>

        <View style={[styles.authorCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.authorLabel, { color: colors.textLight }]}>Desenvolvido por</Text>
          <Text style={[styles.authorName, { color: colors.text }]}>Cesar Sampaio Gomes</Text>
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
          <View style={styles.socialLinks}>
            <TouchableOpacity onPress={() => Linking.openURL(SOCIAL_LINKS.linkedin)} style={styles.socialButton}>
              <Ionicons name="logo-linkedin" size={22} color={colors.primary} />
              <Text style={[styles.socialLabel, { color: colors.textLight }]}>LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(SOCIAL_LINKS.github)} style={styles.socialButton}>
              <Ionicons name="logo-github" size={22} color={colors.primary} />
              <Text style={[styles.socialLabel, { color: colors.textLight }]}>GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(SOCIAL_LINKS.instagram)} style={styles.socialButton}>
              <Ionicons name="logo-instagram" size={22} color={colors.primary} />
              <Text style={[styles.socialLabel, { color: colors.textLight }]}>Instagram</Text>
            </TouchableOpacity>
          </View>
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
  version: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 12,
  },
  authorCard: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    alignItems: 'center',
    marginBottom: 8,
  },
  authorLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    width: '100%',
    marginVertical: 12,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  socialButton: {
    alignItems: 'center',
    gap: 4,
  },
  socialLabel: {
    fontSize: 11,
  },
});
