import React, { useState } from 'react';
import { View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import { TextInput, Button } from 'react-native-paper';



const RadioButton = ({ options, selectedOption, onSelect }) => {
    return (
      <View>
        {options.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => onSelect(option)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 12,
                  borderWidth: 2,
                  borderColor: selectedOption === option ? '#007AFF' : '#000',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {selectedOption === option && (
                  <View
                    style={{
                      height: 12,
                      width: 12,
                      borderRadius: 6,
                      backgroundColor: '#007AFF',
                    }}
                  />
                )}
              </View>
              <Text style={{ marginLeft: 10 }}>{option}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
export default RadioButton