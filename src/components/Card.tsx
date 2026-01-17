// Componente Card para o Dashboard

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

interface CardProps {
  title: string;
  subtitle?: string;
  onPress?: () => void;
  style?: ViewStyle;
  size?: 'small' | 'medium' | 'large';
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  onPress,
  style,
  size = 'medium',
}) => {
  const { colors } = useTheme();

  const getSizeStyle = (): ViewStyle => {
    switch (size) {
      case 'small':
        return { width: '45%', height: 100 };
      case 'medium':
        return { width: '45%', height: 130 };
      case 'large':
        return { width: '100%', height: 130 };
      default:
        return { width: '45%', height: 130 };
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        getSizeStyle(),
        {
          backgroundColor: colors.card,
          borderColor: colors.cardBorder,
        },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={!onPress}
    >
      <Text style={[styles.title, { color: colors.textOnPrimary }]}>
        {title}
      </Text>
      {subtitle && (
        <Text style={[styles.subtitle, { color: colors.textOnPrimary }]}>
          {subtitle}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderWidth: 3,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 4,
  },
});
