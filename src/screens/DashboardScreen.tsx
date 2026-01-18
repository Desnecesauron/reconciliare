// Tela principal (Dashboard)

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, DatePickerModal } from '../components';

export const DashboardScreen: React.FC = () => {
  const { colors } = useTheme();
  const { lastConfession, nextConfession, setNextConfessionDate, scheduleConfessionReminder } = useUser();
  const { t, getLocale } = useLanguage();
  const navigation = useNavigation();
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const formatDate = (dateString: string | null): string => {
    if (!dateString) return '--/--/--';
    const date = new Date(dateString);
    return date.toLocaleDateString(getLocale(), {
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

  const handleDateConfirm = async (date: Date, addToCalendar: boolean) => {
    setDatePickerVisible(false);
    await setNextConfessionDate(date.toISOString());
    if (addToCalendar) {
      // Passar true para deletar evento anterior quando é alteração de data
      await scheduleConfessionReminder(date, true);
    }
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
            title={t('dashboard.lastConfession')}
            subtitle={formatDate(lastConfession)}
            onPress={() => navigation.navigate('Historico' as never)}
          />
          <Card
            title={t('dashboard.myHistory')}
            onPress={() => navigation.navigate('Historico' as never)}
          />
        </View>

        <View style={styles.row}>
          <Card
            title={t('dashboard.nextConfession')}
            subtitle={formatDate(nextConfession)}
            onPress={() => setDatePickerVisible(true)}
          />
          <Card
            title={getDaysSinceConfession() !== 1
              ? t('dashboard.daysWithoutPlural', { count: getDaysSinceConfession() })
              : t('dashboard.daysWithout', { count: getDaysSinceConfession() })}
            subtitle={t('dashboard.withoutConfessing')}
          />
        </View>

        {/* Modal de seleção de data */}
        <DatePickerModal
          visible={datePickerVisible}
          initialDate={nextConfession ? new Date(nextConfession) : undefined}
          onConfirm={handleDateConfirm}
          onCancel={() => setDatePickerVisible(false)}
        />

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
