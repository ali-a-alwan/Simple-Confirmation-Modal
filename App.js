import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

const ConfirmationModal = ({ isVisible, onClose, onConfirm }) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' }}>
          <Text style={{ marginBottom: 10 }}>Are you sure you want to log out?</Text>
          <Button title="Cancel" onPress={onClose} />
          <Button title="Confirm" onPress={onConfirm} />
        </View>
      </View>
    </Modal>
  );
};

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleConfirm = () => {
    // Perform logout action here
    console.log('Logged out');
    // Close the modal
    setIsModalVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Modal" onPress={toggleModal} />
      <ConfirmationModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        onConfirm={handleConfirm}
      />
    </View>
  );
};

export default App;
