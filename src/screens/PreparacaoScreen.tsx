// Tela de Preparação - Menu de artigos

import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { artigos } from '../data/preparacao';

export const PreparacaoScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleArticlePress = (articleId: string) => {
    (navigation as any).navigate('PreparacaoArtigo', { articleId });
  };

  const renderArticleItem = ({ item }: { item: typeof artigos[0] }) => (
    <TouchableOpacity
      style={[styles.articleItem, { borderBottomColor: colors.border }]}
      onPress={() => handleArticlePress(item.id)}
    >
      <Text style={[styles.articleTitle, { color: colors.text }]}>
        {item.title}
      </Text>
      <Ionicons name="chevron-forward" size={20} color={colors.textLight} />
    </TouchableOpacity>
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
          Preparação
        </Text>
        <View style={styles.placeholder} />
      </View>

      <FlatList
        data={artigos}
        keyExtractor={(item) => item.id}
        renderItem={renderArticleItem}
        contentContainerStyle={styles.listContent}
      />
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
    paddingVertical: 8,
  },
  articleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  articleTitle: {
    fontSize: 18,
    flex: 1,
  },
});
