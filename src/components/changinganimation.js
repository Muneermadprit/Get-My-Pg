import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';

const ButtonAnimation = () => {
  const [showNextButton, setShowNextButton] = useState(false);
  const opacity = useSharedValue(1);

  const toggleButton = () => {
    setShowNextButton((prev) => !prev);
    opacity.value = 0; // Fade out animation
    setTimeout(() => {
      opacity.value = 1; // Fade in animation
    }, 500);
  };

  const buttonStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(opacity.value),
    };
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View style={[{ opacity: 1 }, buttonStyle]}>
        {!showNextButton ? (
          <TouchableOpacity onPress={toggleButton} style={{ padding: 10, backgroundColor: 'green' }}>
            <Text style={{ color: 'white' }}>First Button</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={toggleButton} style={{ padding: 10, backgroundColor: 'blue' }}>
            <Text style={{ color: 'white' }}>Next Button</Text>
          </TouchableOpacity>
        )}
      </Animated.View>
    </View>
  );
};

export default ButtonAnimation;
