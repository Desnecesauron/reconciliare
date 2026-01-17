// Tela Sobre

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

export const SobreScreen: React.FC = () => {
  const { colors } = useTheme();
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
          Sobre
        </Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={[styles.text, { color: colors.text }]}>
          RECONCILIARE vem do latim e significa "reconciliar", "restabelecer a paz", "voltar à amizade". É exatamente isso que o sacramento da Reconciliação nos proporciona: a oportunidade de nos reconciliarmos com Deus e com a Igreja.
        </Text>

        <Text style={[styles.text, { color: colors.text }]}>
          Jesus, com a sua infinita bondade, instituiu o sacramento da reconciliação nos presenteando com a Sua Misericórdia Divina. Por meio deste sacramento, podemos receber o perdão dos nossos pecados e a graça de recomeçar.
        </Text>

        <Text style={[styles.text, { color: colors.text }]}>
          O aplicativo RECONCILIARE foi desenvolvido para ajudar todos os católicos a elaborarem o seu exame de consciência antes da confissão. Ele foi projetado para ser simples e fácil de ser usado, ajudando você a lembrar seus pecados de modo a fazer uma boa confissão.
        </Text>

        <Text style={[styles.text, { color: colors.text }]}>
          Que Deus abençoe você e sua família!
        </Text>

        <View style={styles.versionContainer}>
          <Text style={[styles.version, { color: colors.textLight }]}>
            Versão 1.0.0
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
