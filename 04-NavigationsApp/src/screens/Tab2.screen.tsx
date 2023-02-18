import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export const Tab2 = () => {
  useEffect(() => {
    console.log('Tab2Screen');
  }, []);

  return (
    <View>
        <Text>Tab1Screen</Text>
    </View>
  );
};
