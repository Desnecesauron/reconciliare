// Componente de Avatar

import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

interface AvatarProps {
  uri?: string;
  size?: number;
  editable?: boolean;
  onEdit?: () => void;
  name?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  uri,
  size = 80,
  editable = false,
  onEdit,
  name,
}) => {
  const { colors } = useTheme();

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.avatarContainer,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: colors.surface,
            borderColor: colors.border,
          },
        ]}
      >
        {uri ? (
          <Image
            source={{ uri }}
            style={[
              styles.image,
              {
                width: size,
                height: size,
                borderRadius: size / 2,
              },
            ]}
          />
        ) : (
          <View
            style={[
              styles.placeholder,
              {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: colors.surface,
              },
            ]}
          >
            {name ? (
              <Text
                style={[
                  styles.initials,
                  {
                    color: colors.textLight,
                    fontSize: size * 0.35,
                  },
                ]}
              >
                {getInitials(name)}
              </Text>
            ) : (
              <Ionicons
                name="person"
                size={size * 0.5}
                color={colors.textLight}
              />
            )}
          </View>
        )}
      </View>
      {editable && (
        <TouchableOpacity
          style={[
            styles.editButton,
            {
              backgroundColor: colors.primary,
              right: 0,
              bottom: 0,
            },
          ]}
          onPress={onEdit}
        >
          <Ionicons name="pencil" size={16} color={colors.textOnPrimary} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignSelf: 'center',
  },
  avatarContainer: {
    borderWidth: 2,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontWeight: '600',
  },
  editButton: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
