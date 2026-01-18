// Tela de Artigo de Preparação

import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Markdown from 'react-native-markdown-display';
import { useTheme } from '../contexts/ThemeContext';
import { artigos } from '../data/preparacao';

type RouteParams = {
  PreparacaoArtigo: {
    articleId: string;
  };
};

export const PreparacaoArtigoScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RouteParams, 'PreparacaoArtigo'>>();

  const articleId = route.params?.articleId;
  const article = artigos.find((a) => a.id === articleId);

  const markdownStyles = useMemo(() => ({
    body: {
      color: colors.text,
      fontSize: 16,
      lineHeight: 26,
    },
    paragraph: {
      marginBottom: 16,
    },
    strong: {
      fontWeight: '700' as const,
      color: colors.text,
    },
    heading1: {
      fontSize: 22,
      fontWeight: '700' as const,
      color: colors.primary,
      marginTop: 20,
      marginBottom: 12,
    },
    heading2: {
      fontSize: 20,
      fontWeight: '600' as const,
      color: colors.primary,
      marginTop: 18,
      marginBottom: 10,
    },
    heading3: {
      fontSize: 18,
      fontWeight: '600' as const,
      color: colors.primary,
      marginTop: 16,
      marginBottom: 8,
    },
    bullet_list: {
      marginBottom: 16,
    },
    ordered_list: {
      marginBottom: 16,
    },
    list_item: {
      marginBottom: 8,
    },
    bullet_list_icon: {
      color: colors.primary,
      fontSize: 16,
      marginRight: 8,
    },
    ordered_list_icon: {
      color: colors.primary,
      fontSize: 16,
      marginRight: 8,
    },
    blockquote: {
      backgroundColor: colors.surface,
      borderLeftColor: colors.primary,
      borderLeftWidth: 4,
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginVertical: 12,
    },
  }), [colors]);

  if (!article) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text }}>Artigo não encontrado</Text>
      </View>
    );
  }

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

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Título do artigo */}
        <Text style={[styles.articleTitle, { color: colors.primary }]}>
          {article.title}
        </Text>

        <View style={[styles.divider, { backgroundColor: colors.primary }]} />

        {/* Conteúdo em Markdown */}
        <Markdown style={markdownStyles}>
          {article.content}
        </Markdown>

        {/* Fonte */}
        {article.source && (
          <Text style={[styles.source, { color: colors.textLight }]}>
            Fonte: {article.source}
          </Text>
        )}
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
    padding: 20,
    paddingBottom: 40,
  },
  articleTitle: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  divider: {
    height: 2,
    marginBottom: 20,
  },
  source: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 24,
  },
});
