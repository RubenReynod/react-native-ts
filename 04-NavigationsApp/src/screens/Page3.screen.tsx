import React, { FC } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/theme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{}

export const Page3: FC<Props> = ({navigation}) => {

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 3 screen</Text>
      <Button title="Go back" onPress={() => navigation.pop()} />
      <Button title="Go to page 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
