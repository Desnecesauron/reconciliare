// Tela de Orações

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { oracoes } from '../data/oracoes';
import { Prayer } from '../types';

export const OracoesScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [selectedPrayer, setSelectedPrayer] = useState<Prayer | null>(null);

  const renderPrayerItem = ({ item }: { item: Prayer }) => (
    <TouchableOpacity
      style={[styles.prayerItem, { borderBottomColor: colors.border }]}
      onPress={() => setSelectedPrayer(item)}
    >
      <Ionicons name="book-outline" size={24} color={colors.primary} />
      <Text style={[styles.prayerTitle, { color: colors.text }]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color={colors.textOnPrimary} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.textOnPrimary }]}>
          Orações
        </Text>
        <View style={styles.placeholder} />
      </View>

      <FlatList
        data={oracoes}
        keyExtractor={(item) => item.id}
        renderItem={renderPrayerItem}
        contentContainerStyle={styles.listContent}
      />

      {/* Modal com a oração */}
      <Modal
        visible={selectedPrayer !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedPrayer(null)}
      >
        <TouchableWithoutFeedback onPress={() => setSelectedPrayer(null)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={[styles.modalContent, { backgroundColor: colors.background }]}>
                <View style={styles.modalHeader}>
                  <Text style={[styles.modalTitle, { color: colors.primary }]}>
                    {selectedPrayer?.title}
                  </Text>
                  <TouchableOpacity onPress={() => setSelectedPrayer(null)}>
                    <Ionicons name="close" size={28} color={colors.textLight} />
                  </TouchableOpacity>
                </View>
                <ScrollView style={styles.modalScroll}>
                  <Text style={[styles.prayerContent, { color: colors.text }]}>
                    {selectedPrayer?.content}
                  </Text>
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  placeholder: {
    width: 32,
  },
  listContent: {
    paddingVertical: 8,
  },
  prayerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  prayerTitle: {
    fontSize: 16,
    marginLeft: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 40,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
  },
  modalScroll: {
    paddingHorizontal: 20,
  },
  prayerContent: {
    fontSize: 17,
    lineHeight: 28,
  },
});
