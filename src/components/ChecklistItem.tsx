// Componente de item de checklist para o Exame de Consciência

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

interface ChecklistItemProps {
  text: string;
  checked: boolean;
  onToggle: () => void;
}

export const ChecklistItem: React.FC<ChecklistItemProps> = ({
  text,
  checked,
  onToggle,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <View
        style={[
          styles.checkbox,
          {
            borderColor: checked ? colors.primary : colors.border,
            backgroundColor: checked ? colors.primary : 'transparent',
          },
        ]}
      >
        {checked && (
          <Ionicons name="checkmark" size={16} color={colors.textOnPrimary} />
        )}
      </View>
      <Text
        style={[
          styles.text,
          {
            color: colors.text,
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 2,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  text: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },
});
