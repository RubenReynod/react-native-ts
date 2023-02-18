import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/theme';

export const Page2 = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Go Back',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2 screen</Text>
      <Button title="Go to page 3" onPress={() => navigator.navigate('Page3')} />
    </View>
  );
};
