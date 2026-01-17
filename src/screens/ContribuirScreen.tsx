// Tela Contribuir

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { CustomButton } from '../components';

export const ContribuirScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleDonate = () => {
    // Aqui você pode adicionar um link para doação
    Linking.openURL('https://example.com/donate');
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
          Contribuir
        </Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={[styles.text, { color: colors.text }]}>
          Muito obrigado por usar o app RECONCILIARE! Esperamos que isto possa ajudar nas suas confissões.
        </Text>

        <Text style={[styles.text, { color: colors.text }]}>
          Se você deseja contribuir com alguma doação para ajudar a manter este projeto, clique no botão abaixo.
        </Text>

        <Text style={[styles.text, { color: colors.text }]}>
          Sua contribuição ajuda a manter o aplicativo gratuito e disponível para todos os católicos que desejam viver uma vida de oração e reconciliação com Deus.
        </Text>

        <View style={styles.buttonsContainer}>
          <CustomButton
            title="QUERO FAZER UMA DOAÇÃO"
            onPress={handleDonate}
            style={styles.button}
          />
        </View>

        <Text style={[styles.thankYou, { color: colors.textLight }]}>
          Que Deus abençoe você e sua família!
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
});
