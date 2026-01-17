// Componente de entrada de PIN

import React, { useRef } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

interface PinInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  length?: number;
  autoFocus?: boolean;
}

export const PinInput: React.FC<PinInputProps> = ({
  value,
  onChange,
  label,
  error,
  length = 4,
  autoFocus = false,
}) => {
  const { colors } = useTheme();
  const inputRef = useRef<TextInput>(null);

  const handleChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '').slice(0, length);
    onChange(numericValue);
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: colors.textLight }]}>{label}</Text>
      )}
      <Pressable style={styles.dotsContainer} onPress={handleFocus}>
        {Array.from({ length }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: value.length > index ? colors.primary : 'transparent',
                borderColor: error ? colors.error : colors.primary,
              },
            ]}
          />
        ))}
      </Pressable>
      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        value={value}
        onChangeText={handleChange}
        keyboardType="numeric"
        maxLength={length}
        secureTextEntry
        autoFocus={autoFocus}
      />
      {error && (
        <Text style={[styles.error, { color: colors.error }]}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  label: {
    fontSize: 14,
    marginBottom: 12,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    height: 0,
    width: 0,
  },
  error: {
    fontSize: 12,
    marginTop: 8,
  },
});
