// Context para autenticação (PIN)

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getPin, savePin, getIsRegistered, setIsRegistered, clearAllData, setEncryptionKeyFromPin } from '../services/storage';

interface AuthContextData {
  isAuthenticated: boolean;
  isRegistered: boolean;
  isLoading: boolean;
  login: (pin: string) => Promise<boolean>;
  register: (pin: string) => Promise<void>;
  registerFromBackup: (pin: string) => Promise<void>;
  logout: () => void;
  resetPin: (newPin: string) => Promise<void>;
  clearAll: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistered, setIsRegisteredState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkRegistration();
  }, []);

  const checkRegistration = async () => {
    try {
      const registered = await getIsRegistered();
      setIsRegisteredState(registered);
    } catch (error) {
      console.error('Error checking registration:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (pin: string): Promise<boolean> => {
    const storedPin = await getPin();
    if (storedPin === pin) {
      // Configura a chave de criptografia baseada no PIN
      await setEncryptionKeyFromPin(pin);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const register = async (pin: string): Promise<void> => {
    await savePin(pin);
    // Configura a chave de criptografia baseada no PIN
    await setEncryptionKeyFromPin(pin);
    await setIsRegistered(true);
    setIsRegisteredState(true);
    setIsAuthenticated(true);
  };

  // Registra usuário após importação de backup (usa o PIN do backup)
  const registerFromBackup = async (pin: string): Promise<void> => {
    await savePin(pin);
    // A chave já foi configurada durante o import
    await setIsRegistered(true);
    setIsRegisteredState(true);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const resetPin = async (newPin: string): Promise<void> => {
    await savePin(newPin);
  };

  const clearAll = async (): Promise<void> => {
    await clearAllData();
    setIsAuthenticated(false);
    setIsRegisteredState(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isRegistered,
        isLoading,
        login,
        register,
        registerFromBackup,
        logout,
        resetPin,
        clearAll,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
