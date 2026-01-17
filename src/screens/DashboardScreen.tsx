// Tela principal (Dashboard)

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import { Card } from '../components';

export const DashboardScreen: React.FC = () => {
  const { colors } = useTheme();
  const { lastConfession, nextConfession } = useUser();
  const navigation = useNavigation();

  const formatDate = (dateString: string | null): string => {
    if (!dateString) return '--/--/--';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });
  };

  const getDaysSinceConfession = (): number => {
    if (!lastConfession) return 0;
    const last = new Date(lastConfession);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - last.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
          <Ionicons name="menu" size={28} color={colors.textOnPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textOnPrimary }]}>
          Reconciliare
        </Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.cardsContainer}
      >
        <View style={styles.row}>
          <Card
            title="ÚLTIMA CONFISSÃO"
            subtitle={formatDate(lastConfession)}
            onPress={() => navigation.navigate('Historico' as never)}
          />
          <Card
            title="MEU HISTÓRICO"
            onPress={() => navigation.navigate('Historico' as never)}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.emptySpace} />
          <Card
            title={`ESTOU ${getDaysSinceConfession()} DIA${getDaysSinceConfession() !== 1 ? 'S' : ''}`}
            subtitle="SEM CONFESSAR"
          />
        </View>

        <View style={styles.row}>
          <Card
            title="PRÓXIMA CONFISSÃO"
            subtitle={formatDate(nextConfession)}
            onPress={() => navigation.navigate('Configuracoes' as never)}
          />
          <View style={styles.emptySpace} />
        </View>

        {/* Logo/Branding */}
        <View style={styles.brandingContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logoSmall}
            resizeMode="contain"
          />
          <Text style={[styles.brandingText, { color: colors.primary }]}>
            Reconciliare
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
  menuButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  placeholder: {
    width: 36,
  },
  content: {
    flex: 1,
  },
  cardsContainer: {
    padding: 24,
    paddingTop: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  emptySpace: {
    width: '45%',
  },
  brandingContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logoSmall: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  brandingText: {
    fontSize: 18,
    fontWeight: '600',
  },
});
