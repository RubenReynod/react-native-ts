import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colors } from '../theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BtnIcon } from '../components/BtnIcon';

export const Tab1 = () => {
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen');
  }, []);

  return (
    <View style={[styles.globalMargin, { marginTop: top }]}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
          <BtnIcon name="airplane-outline" />
          <BtnIcon name="american-football-outline" />
          <BtnIcon name="alarm-outline" />
          <BtnIcon name="bicycle-outline" />
          <BtnIcon name="cog-outline" />
          <BtnIcon name="film-outline" />
          <BtnIcon name="heart-circle-outline" />
        </Text>
    </View>
  );
};
