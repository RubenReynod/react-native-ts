import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export const Tab3 = () => {
  useEffect(() => {
    console.log('Tab3Screen');
  }, []);

  return (
    <View>
        <Text>Tab1Screen</Text>
    </View>
  );
};
