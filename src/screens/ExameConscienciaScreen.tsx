// Tela de Exame de Consciência

import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import { ChecklistItem } from '../components';
import { exameCategorias } from '../data/exameConsciencia';
import { ExamCategory, ExamSin } from '../types';

export const ExameConscienciaScreen: React.FC = () => {
  const { colors } = useTheme();
  const { saveExam, loadExam, addSin, removeSin, mySins, examState } = useUser();
  const navigation = useNavigation();

  const [categories, setCategories] = useState<ExamCategory[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  useEffect(() => {
    initializeExam();
  }, []);

  // Fechar todos os menus ao entrar na tela
  useFocusEffect(
    useCallback(() => {
      setExpandedCategories(new Set());
    }, [])
  );

  // Sincronizar com examState do contexto (quando muda de outra tela)
  useEffect(() => {
    if (examState === null) {
      setCategories(exameCategorias);
    } else if (examState) {
      setCategories(examState);
    }
  }, [examState]);

  const initializeExam = async () => {
    const savedExam = await loadExam();
    if (savedExam && savedExam.length > 0) {
      setCategories(savedExam);
    } else {
      setCategories(exameCategorias);
    }
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const isAllExpanded = categories.length > 0 && expandedCategories.size === categories.length;

  const toggleAllCategories = () => {
    if (isAllExpanded) {
      // Minimizar tudo
      setExpandedCategories(new Set());
    } else {
      // Expandir tudo
      setExpandedCategories(new Set(categories.map((c) => c.id)));
    }
  };

  const toggleSin = async (categoryId: string, sinId: string) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        const updatedSins = category.sins.map((sin) => {
          if (sin.id === sinId) {
            const newChecked = !sin.checked;

            // Adicionar ou remover de "Meus Pecados"
            if (newChecked) {
              addSin(sin.description, 'exam', categoryId);
            } else {
              // Encontrar e remover o pecado correspondente
              const existingSin = mySins.find(
                (s) => s.description === sin.description && s.source === 'exam'
              );
              if (existingSin) {
                removeSin(existingSin.id);
              }
            }

            return { ...sin, checked: newChecked };
          }
          return sin;
        });
        return { ...category, sins: updatedSins };
      }
      return category;
    });

    setCategories(updatedCategories);
    await saveExam(updatedCategories);
  };

  const getCheckedCount = (): number => {
    return categories.reduce((total, category) => {
      return total + category.sins.filter((sin) => sin.checked).length;
    }, 0);
  };

  const renderCategoryHeader = (category: ExamCategory) => {
    const isExpanded = expandedCategories.has(category.id);
    const checkedInCategory = category.sins.filter((s) => s.checked).length;

    return (
      <TouchableOpacity
        style={[styles.categoryHeader, { backgroundColor: colors.surface }]}
        onPress={() => toggleCategory(category.id)}
      >
        <View style={styles.categoryTitleContainer}>
          <Text style={[styles.categoryTitle, { color: colors.text }]}>
            {category.name}
          </Text>
          {checkedInCategory > 0 && (
            <View style={[styles.badge, { backgroundColor: colors.primary }]}>
              <Text style={[styles.badgeText, { color: colors.textOnPrimary }]}>
                {checkedInCategory}
              </Text>
            </View>
          )}
        </View>
        <Ionicons
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color={colors.textLight}
        />
      </TouchableOpacity>
    );
  };

  const sections = categories.map((category) => ({
    title: category,
    data: expandedCategories.has(category.id) ? category.sins : [],
  }));

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
          Exame de Consciência
        </Text>
        <View style={styles.headerActions}>
          <TouchableOpacity
            onPress={toggleAllCategories}
            style={styles.expandButton}
          >
            <Ionicons
              name={isAllExpanded ? 'contract-outline' : 'expand-outline'}
              size={22}
              color={colors.textOnPrimary}
            />
          </TouchableOpacity>
          <View style={styles.counterContainer}>
            <Text style={[styles.counterText, { color: colors.textOnPrimary }]}>
              {getCheckedCount()}
            </Text>
          </View>
        </View>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) =>
          renderCategoryHeader(section.title)
        }
        renderItem={({ item, section }) => (
          <ChecklistItem
            text={item.description}
            checked={item.checked}
            onToggle={() => toggleSin(section.title.id, item.id)}
          />
        )}
        stickySectionHeadersEnabled={false}
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
    flex: 1,
    textAlign: 'center',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  expandButton: {
    padding: 4,
  },
  counterContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 14,
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: 20,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 8,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  categoryTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
  },
  badge: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
