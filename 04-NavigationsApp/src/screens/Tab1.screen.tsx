import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, colors } from '../theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1 = () => {
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen');
  }, []);

  return (
    <View style={[styles.globalMargin, { marginTop: top }]}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
          <Icon name="airplane-outline" size={80} color={colors.primary} />
          <Icon name="american-football-outline" size={80} color={colors.primary} />
          <Icon name="alarm-outline" size={80} color={colors.primary} />
          <Icon name="bicycle-outline" size={80} color={colors.primary} />
          <Icon name="cog-outline" size={80} color={colors.primary} />
          <Icon name="film-outline" size={80} color={colors.primary} />
          <Icon name="heart-circle-outline" size={80} color={colors.primary} />
        </Text>
    </View>
  );
};
