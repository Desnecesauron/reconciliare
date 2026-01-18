// Tela de Histórico de Confissões

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import { useLanguage } from '../contexts/LanguageContext';
import { EmptyState } from '../components';

export const HistoricoScreen: React.FC = () => {
  const { colors } = useTheme();
  const { confessions } = useUser();
  const { t, getLocale } = useLanguage();
  const navigation = useNavigation();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString(getLocale(), {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const renderConfessionItem = ({ item }: { item: typeof confessions[0] }) => (
    <View style={[styles.confessionItem, { borderBottomColor: colors.border }]}>
      <Text style={[styles.confessionText, { color: colors.text }]}>
        {formatDate(item.date)} - {item.sinsCount} {item.sinsCount !== 1 ? t('history.sinsForgiven') : t('history.sinForgiven')}
      </Text>
    </View>
  );

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
          {t('history.title')}
        </Text>
        <View style={styles.placeholder} />
      </View>

      {confessions.length === 0 ? (
        <EmptyState
          message={t('history.empty')}
          icon="calendar-outline"
        />
      ) : (
        <FlatList
          data={confessions}
          keyExtractor={(item) => item.id}
          renderItem={renderConfessionItem}
          contentContainerStyle={styles.listContent}
        />
      )}
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
  listContent: {
    padding: 16,
  },
  confessionItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  confessionText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
