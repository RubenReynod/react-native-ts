import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colors } from '../theme/theme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const Settings = () => {
  const insets = useSafeAreaInsets();
  const { authState } = useContext(AuthContext);

  return (
    <View style={[styles.globalMargin, { marginTop: insets.top }]}>
      <Text style={styles.title}>Settings screen</Text>
      <Text>{ JSON.stringify(authState, null, 4) }</Text>
      { authState.favoriteIcon && <Icon name={authState.favoriteIcon} color={colors.primary} size={150} /> }
    </View>
  );
};
