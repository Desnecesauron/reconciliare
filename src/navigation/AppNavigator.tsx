// Navegação principal do app

import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { DrawerContent } from './DrawerContent';

// Telas de autenticação
import { CadastroScreen } from '../screens/auth/CadastroScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';

// Telas principais
import { DashboardScreen } from '../screens/DashboardScreen';
import { ExameConscienciaScreen } from '../screens/ExameConscienciaScreen';
import { MeusPecadosScreen } from '../screens/MeusPecadosScreen';
import { HistoricoScreen } from '../screens/HistoricoScreen';
import { OracoesScreen } from '../screens/OracoesScreen';
import { PreparacaoScreen } from '../screens/PreparacaoScreen';
import { PreparacaoArtigoScreen } from '../screens/PreparacaoArtigoScreen';
import { ConfiguracoesScreen } from '../screens/ConfiguracoesScreen';
import { ContribuirScreen } from '../screens/ContribuirScreen';
import { AjudaScreen } from '../screens/AjudaScreen';
import { SobreScreen } from '../screens/SobreScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Stack de Preparação
const PreparacaoStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PreparacaoMenu" component={PreparacaoScreen} />
      <Stack.Screen name="PreparacaoArtigo" component={PreparacaoArtigoScreen} />
    </Stack.Navigator>
  );
};

// Stack de autenticação
const AuthStack: React.FC = () => {
  const { isRegistered } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isRegistered ? (
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

// Drawer Navigator (app principal)
const MainDrawer: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: '75%',
        },
      }}
    >
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="ExameConsciencia" component={ExameConscienciaScreen} />
      <Drawer.Screen name="MeusPecados" component={MeusPecadosScreen} />
      <Drawer.Screen name="Historico" component={HistoricoScreen} />
      <Drawer.Screen name="Oracoes" component={OracoesScreen} />
      <Drawer.Screen name="Preparacao" component={PreparacaoStack} />
      <Drawer.Screen name="Configuracoes" component={ConfiguracoesScreen} />
      <Drawer.Screen name="Contribuir" component={ContribuirScreen} />
      <Drawer.Screen name="Ajuda" component={AjudaScreen} />
      <Drawer.Screen name="Sobre" component={SobreScreen} />
    </Drawer.Navigator>
  );
};

// Navegador principal
export const AppNavigator: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const { colors } = useTheme();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.background,
        }}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};
