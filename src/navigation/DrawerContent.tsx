// Conteúdo personalizado do Drawer

import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Avatar } from '../components';

interface MenuItem {
  nameKey: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
  section?: 'main' | 'secondary';
}

const menuItemsConfig: MenuItem[] = [
  { nameKey: 'nav.myConfessions', icon: 'home-outline', route: 'Dashboard', section: 'main' },
  { nameKey: 'nav.examConscience', icon: 'clipboard-outline', route: 'ExameConsciencia', section: 'main' },
  { nameKey: 'nav.mySins', icon: 'document-outline', route: 'MeusPecados', section: 'main' },
  { nameKey: 'nav.prayers', icon: 'book-outline', route: 'Oracoes', section: 'main' },
  { nameKey: 'nav.preparation', icon: 'bookmark-outline', route: 'Preparacao', section: 'main' },
  { nameKey: 'nav.settings', icon: 'settings-outline', route: 'Configuracoes', section: 'secondary' },
  { nameKey: 'nav.contribute', icon: 'thumbs-up-outline', route: 'Contribuir', section: 'secondary' },
  { nameKey: 'nav.help', icon: 'help-circle-outline', route: 'Ajuda', section: 'secondary' },
  { nameKey: 'nav.about', icon: 'information-circle-outline', route: 'Sobre', section: 'secondary' },
];

export const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { colors } = useTheme();
  const { user } = useUser();
  const { logout } = useAuth();
  const { t } = useLanguage();

  const menuItems = useMemo(() => menuItemsConfig.map(item => ({
    ...item,
    name: t(item.nameKey),
  })), [t]);

  const navigateTo = (route: string) => {
    props.navigation.navigate(route);
  };

  const mainItems = menuItems.filter((item) => item.section === 'main');
  const secondaryItems = menuItems.filter((item) => item.section === 'secondary');

  return (
    <View style={[styles.container, { backgroundColor: colors.drawer }]}>
      {/* Header com avatar e info do usuário */}
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <Avatar size={70} name={user?.name} />
        <Text style={[styles.userName, { color: colors.textOnPrimary }]}>
          {user?.name || t('common.user')}
        </Text>
        <Text style={[styles.xpText, { color: colors.xpColor }]}>
          {user?.xp || 0}xp
        </Text>
      </View>

      <ScrollView style={styles.menuContainer}>
        {/* Menu principal */}
        {mainItems.map((item) => (
          <TouchableOpacity
            key={item.route}
            style={styles.menuItem}
            onPress={() => navigateTo(item.route)}
          >
            <Ionicons name={item.icon} size={24} color={colors.textLight} />
            <Text style={[styles.menuText, { color: colors.text }]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Separador */}
        <View style={[styles.separator, { backgroundColor: colors.border }]} />

        {/* Menu secundário */}
        {secondaryItems.map((item) => (
          <TouchableOpacity
            key={item.route}
            style={styles.menuItem}
            onPress={() => navigateTo(item.route)}
          >
            <Ionicons name={item.icon} size={24} color={colors.textLight} />
            <Text style={[styles.menuText, { color: colors.text }]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Botão de logout */}
        <TouchableOpacity
          style={[styles.menuItem, styles.logoutButton]}
          onPress={logout}
        >
          <Ionicons name="log-out-outline" size={24} color={colors.error} />
          <Text style={[styles.menuText, { color: colors.error }]}>
            {t('nav.logout')}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 16,
    alignItems: 'flex-start',
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 12,
  },
  xpText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 4,
  },
  menuContainer: {
    flex: 1,
    paddingTop: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 16,
  },
  separator: {
    height: 1,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  logoutButton: {
    marginTop: 16,
  },
});
