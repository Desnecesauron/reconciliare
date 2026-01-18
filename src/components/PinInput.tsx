// Componente de entrada de PIN

import React, { useRef, useEffect } from 'react';
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

  // Foco automático com delay para funcionar em modais
  useEffect(() => {
    if (autoFocus) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [autoFocus]);

  const handleChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '').slice(0, length);
    onChange(numericValue);
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <Pressable style={styles.container} onPress={handleFocus}>
      {label && (
        <Text style={[styles.label, { color: colors.textLight }]}>{label}</Text>
      )}
      <View style={styles.dotsContainer}>
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
      </View>
      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        value={value}
        onChangeText={handleChange}
        keyboardType="numeric"
        maxLength={length}
        secureTextEntry
        caretHidden
      />
      {error && (
        <Text style={[styles.error, { color: colors.error }]}>{error}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 12,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 40,
    paddingVertical: 12,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
  hiddenInput: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
  },
  error: {
    fontSize: 12,
    marginTop: 8,
  },
});
