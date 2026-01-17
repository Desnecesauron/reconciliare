// Componente seletor de tema

import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { ThemeType } from '../types';
import { themeOptions } from '../theme/colors';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeSelectorProps {
  selected: ThemeType;
  onSelect: (theme: ThemeType) => void;
  label?: string;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
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
        {themeOptions.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={[
              styles.option,
              { backgroundColor: option.color },
              selected === option.key && styles.selected,
            ]}
            onPress={() => onSelect(option.key)}
            activeOpacity={0.7}
          />
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
  },
  selected: {
    borderWidth: 3,
    borderColor: '#9CA3AF',
  },
});
