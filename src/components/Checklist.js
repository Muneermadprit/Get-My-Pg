import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // You need to have react-native-vector-icons installed

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon
        name={checked ? 'check-box' : 'check-box-outline-blank'}
        size={24}
        color={checked ? 'green' : 'black'}
        style={{ marginRight: 10 }}
      />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
