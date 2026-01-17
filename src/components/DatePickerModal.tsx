// Modal de seleção de data para próxima confissão

import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

interface DatePickerModalProps {
  visible: boolean;
  initialDate?: Date;
  onConfirm: (date: Date, addToCalendar: boolean) => void;
  onCancel: () => void;
}

export const DatePickerModal: React.FC<DatePickerModalProps> = ({
  visible,
  initialDate,
  onConfirm,
  onCancel,
}) => {
  const { colors } = useTheme();
  const [selectedDate, setSelectedDate] = useState<Date>(
    initialDate || new Date()
  );
  const [addToCalendar, setAddToCalendar] = useState(true);
  const [showPicker, setShowPicker] = useState(Platform.OS === 'ios');

  const handleDateChange = (_event: any, date?: Date) => {
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleConfirm = () => {
    onConfirm(selectedDate, addToCalendar);
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  // Reset state when modal opens
  React.useEffect(() => {
    if (visible) {
      setSelectedDate(initialDate || new Date());
      setAddToCalendar(true);
      if (Platform.OS === 'ios') {
        setShowPicker(true);
      }
    }
  }, [visible, initialDate]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={[styles.content, { backgroundColor: colors.surface }]}>
              <Text style={[styles.title, { color: colors.text }]}>
                Próxima Confissão
              </Text>
              <Text style={[styles.subtitle, { color: colors.textLight }]}>
                Quando você pretende se confessar novamente?
              </Text>

              {/* Date Display / Picker Trigger for Android */}
              {Platform.OS === 'android' && (
                <TouchableOpacity
                  style={[styles.dateDisplay, { borderColor: colors.border }]}
                  onPress={() => setShowPicker(true)}
                >
                  <Ionicons name="calendar-outline" size={20} color={colors.primary} />
                  <Text style={[styles.dateText, { color: colors.text }]}>
                    {formatDate(selectedDate)}
                  </Text>
                </TouchableOpacity>
              )}

              {/* Date Picker */}
              {showPicker && (
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={handleDateChange}
                  minimumDate={new Date()}
                  locale="pt-BR"
                  style={styles.datePicker}
                />
              )}

              {/* Checkbox para adicionar ao calendário */}
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setAddToCalendar(!addToCalendar)}
              >
                <View
                  style={[
                    styles.checkbox,
                    {
                      borderColor: colors.primary,
                      backgroundColor: addToCalendar ? colors.primary : 'transparent',
                    },
                  ]}
                >
                  {addToCalendar && (
                    <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                  )}
                </View>
                <Text style={[styles.checkboxLabel, { color: colors.text }]}>
                  Adicionar lembrete ao calendário
                </Text>
              </TouchableOpacity>

              {/* Buttons */}
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.button, styles.cancelButton, { borderColor: colors.border }]}
                  onPress={onCancel}
                >
                  <Text style={[styles.buttonText, { color: colors.textLight }]}>
                    Cancelar
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.button,
                    styles.confirmButton,
                    { backgroundColor: colors.primary },
                  ]}
                  onPress={handleConfirm}
                >
                  <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>
                    Confirmar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  content: {
    width: '100%',
    borderRadius: 12,
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  dateDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    gap: 12,
  },
  dateText: {
    fontSize: 14,
    flex: 1,
    textTransform: 'capitalize',
  },
  datePicker: {
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxLabel: {
    fontSize: 14,
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    borderWidth: 1,
  },
  confirmButton: {},
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
