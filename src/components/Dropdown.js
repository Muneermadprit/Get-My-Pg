import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import images from '../constan/images'; // You need to have react-native-vector-icons installed

const Dropdown = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
  
    const handleSelectOption = (option) => {
      setSelectedOption(option);
      setModalVisible(false);
      onSelect(option);
    };
  
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>{selectedOption || 'Select'}</Text>
          <Icon name="keyboard-arrow-down" size={14} color="black" />
        </TouchableOpacity>
  
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
              {options.map((option, index) => (
                <TouchableOpacity key={index} onPress={() => handleSelectOption(option)} style={{ paddingVertical: 10 }}>
                  <Text>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  export default Dropdown;