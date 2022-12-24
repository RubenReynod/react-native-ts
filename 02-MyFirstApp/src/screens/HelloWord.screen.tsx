import React from 'react';
import { View, Text } from 'react-native';

const HelloWord = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <Text style={{
          fontSize: 45,
          textAlign: 'center',
        }}>Hola Rubs</Text>
      </View>
  );
};

export default HelloWord;
