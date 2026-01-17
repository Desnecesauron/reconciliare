// Tela de Ajuda

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

export const AjudaScreen: React.FC = () => {
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
          Ajuda
        </Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          PRIMEIRO ACESSO
        </Text>
        <Text style={[styles.text, { color: colors.text }]}>
          Para se cadastrar no app é fácil, basta inserir o seu nome e foto. Posteriormente insira o seu PIN para garantir que nenhuma outra pessoa que pegar o seu celular verá o seu exame de consciência. Você também pode personalizar o app escolhendo o seu idioma e o tema que você mais gosta.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          TELA INICIAL
        </Text>
        <Text style={[styles.text, { color: colors.text }]}>
          Esta tela é o seu dashboard, onde você poderá visualizar o seu histórico de confissões, quantos dias está sem confessar, qual é a da data da sua última confissão e quando será a próxima.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          EXAME DE CONSCIÊNCIA
        </Text>
        <Text style={[styles.text, { color: colors.text }]}>
          Antes da sua confissão, leia atentamente cada pecado e assinale qual deles você cometeu. Desta forma cada pecado será transferido automaticamente para a sua lista de pecados, onde mostrará um resumo geral com todos os seus pecados para que você possa confessá-los ao sacerdote. Após a sua confissão, lembre-se de clicar no botão RECONCILIARE, pronto! Assim como você, o seu app estará limpo e com todos os pecados apagados.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          ORAÇÕES E PREPARAÇÃO
        </Text>
        <Text style={[styles.text, { color: colors.text }]}>
          Nessas sessões você poderá recitar algumas orações ou meditar sobre o sacramento da reconciliação e a sua importância.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          PIN
        </Text>
        <Text style={[styles.text, { color: colors.text }]}>
          O PIN é um código pessoal com 4 números que serve para proteger a sua privacidade. Caso você esqueça o seu PIN, você poderá resetá-lo, porém todos os pecados que estiverem na sua lista de pecados e no exame de consciência serão apagados.
        </Text>

        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          CONFIGURAÇÕES
        </Text>
        <Text style={[styles.text, { color: colors.text }]}>
          Caso você deseje alterar a cor do tema, a sua foto ou o seu PIN, acesse o menu Configurações e deixe o app como você quiser.
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
