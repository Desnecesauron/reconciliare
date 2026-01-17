// Componente seletor de idioma

import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { LanguageType } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface LanguageSelectorProps {
  selected: LanguageType;
  onSelect: (language: LanguageType) => void;
  label?: string;
}

const languages: { key: LanguageType; label: string; flag: string }[] = [
  { key: 'pt', label: 'PT', flag: '🇧🇷' },
  { key: 'en', label: 'EN', flag: '🇬🇧' },
  { key: 'es', label: 'ES', flag: '🇪🇸' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selected,
  onSelect,
  label,
}) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      )}
      <View style={styles.optionsContainer}>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.key}
            style={[
              styles.option,
              {
                borderColor: selected === lang.key ? colors.primary : colors.border,
                backgroundColor: selected === lang.key ? colors.surface : 'transparent',
              },
            ]}
            onPress={() => onSelect(lang.key)}
            activeOpacity={0.7}
          >
            <Text style={styles.flag}>{lang.flag}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
  },
  option: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: {
    fontSize: 28,
  },
});
