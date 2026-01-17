// Tela Meus Pecados

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import { CustomButton, EmptyState, ConfirmModal } from '../components';

export const MeusPecadosScreen: React.FC = () => {
  const { colors } = useTheme();
  const { mySins, addSin, removeSin, registerConfession } = useUser();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [modalVisible, setModalVisible] = useState(false);
  const [newSinText, setNewSinText] = useState('');
  const [removeModalVisible, setRemoveModalVisible] = useState(false);
  const [confessionModalVisible, setConfessionModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [warningModalVisible, setWarningModalVisible] = useState(false);
  const [selectedSinId, setSelectedSinId] = useState<string | null>(null);

  const handleAddSin = () => {
    if (newSinText.trim()) {
      addSin(newSinText.trim(), 'manual');
      setNewSinText('');
      setModalVisible(false);
    }
  };

  const handleRemoveSin = (sinId: string) => {
    setSelectedSinId(sinId);
    setRemoveModalVisible(true);
  };

  const confirmRemoveSin = () => {
    if (selectedSinId) {
      removeSin(selectedSinId);
    }
    setRemoveModalVisible(false);
    setSelectedSinId(null);
  };

  const handleConfession = () => {
    if (mySins.length === 0) {
      setWarningModalVisible(true);
      return;
    }
    setConfessionModalVisible(true);
  };

  const confirmConfession = async () => {
    setConfessionModalVisible(false);
    await registerConfession();
    setSuccessModalVisible(true);
  };

  const handleSuccessClose = () => {
    setSuccessModalVisible(false);
    navigation.goBack();
  };

  const renderSinItem = ({ item }: { item: typeof mySins[0] }) => (
    <TouchableOpacity
      style={styles.sinItem}
      onLongPress={() => handleRemoveSin(item.id)}
    >
      <Text style={[styles.sinText, { color: colors.text }]}>
        {item.description}
      </Text>
      <TouchableOpacity onPress={() => handleRemoveSin(item.id)}>
        <Ionicons name="close-circle" size={24} color={colors.textLight} />
      </TouchableOpacity>
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
          Meus Pecados ({mySins.length})
        </Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.addButton}
        >
          <Ionicons name="add" size={28} color={colors.textOnPrimary} />
        </TouchableOpacity>
      </View>

      {/* Lista de pecados */}
      {mySins.length === 0 ? (
        <EmptyState message="Sem pecados registrados" />
      ) : (
        <FlatList
          data={mySins}
          keyExtractor={(item) => item.id}
          renderItem={renderSinItem}
          contentContainerStyle={[styles.listContent, { paddingBottom: insets.bottom + 100 }]}
        />
      )}

      {/* Botão de confissão */}
      <View style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}>
        <CustomButton
          title="RECONCILIARE"
          onPress={handleConfession}
          style={styles.confessionButton}
        />
      </View>

      {/* Modal para adicionar pecado */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => {
          setNewSinText('');
          setModalVisible(false);
        }}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={[styles.modalContent, { backgroundColor: colors.background }]}>
                <Text style={[styles.modalTitle, { color: colors.text }]}>
                  Pecado
                </Text>
                <Text style={[styles.modalLabel, { color: colors.textLight }]}>
                  Descreva o pecado:
                </Text>
                <TextInput
                  style={[
                    styles.modalInput,
                    {
                      color: colors.text,
                      borderColor: colors.border,
                    },
                  ]}
                  value={newSinText}
                  onChangeText={setNewSinText}
                  placeholder="Digite aqui..."
                  placeholderTextColor={colors.textLight}
                  multiline
                />
                <View style={styles.modalButtons}>
                  <CustomButton
                    title="OK"
                    onPress={handleAddSin}
                    style={styles.modalButton}
                  />
                  <CustomButton
                    title="CANCELAR"
                    onPress={() => {
                      setNewSinText('');
                      setModalVisible(false);
                    }}
                    variant="outline"
                    style={styles.modalButton}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Modal de confirmação para remover pecado */}
      <ConfirmModal
        visible={removeModalVisible}
        title="Remover pecado"
        message="Deseja remover este pecado da lista?"
        confirmText="Remover"
        cancelText="Cancelar"
        confirmStyle="destructive"
        onConfirm={confirmRemoveSin}
        onCancel={() => setRemoveModalVisible(false)}
      />

      {/* Modal de confirmação para confissão */}
      <ConfirmModal
        visible={confessionModalVisible}
        title="Reconciliare"
        message="Você já se confessou e recebeu a absolvição? Esta ação limpará sua lista de pecados e registrará a confissão."
        confirmText="Sim, me confessei"
        cancelText="Cancelar"
        onConfirm={confirmConfession}
        onCancel={() => setConfessionModalVisible(false)}
      />

      {/* Modal de sucesso */}
      <ConfirmModal
        visible={successModalVisible}
        title="Parabéns!"
        message="Sua confissão foi registrada. Que Deus abençoe você!"
        confirmText="OK"
        cancelText=""
        onConfirm={handleSuccessClose}
        onCancel={handleSuccessClose}
      />

      {/* Modal de aviso */}
      <ConfirmModal
        visible={warningModalVisible}
        title="Atenção"
        message="Não há pecados para confessar."
        confirmText="OK"
        cancelText=""
        onConfirm={() => setWarningModalVisible(false)}
        onCancel={() => setWarningModalVisible(false)}
      />
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
  addButton: {
    padding: 4,
  },
  listContent: {
    padding: 16,
  },
  sinItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  sinText: {
    flex: 1,
    fontSize: 16,
    marginRight: 12,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'transparent',
  },
  confessionButton: {
    marginHorizontal: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalContent: {
    width: '100%',
    borderRadius: 12,
    padding: 24,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  modalLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  modalInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 12,
  },
  modalButton: {
    flex: 1,
  },
});
