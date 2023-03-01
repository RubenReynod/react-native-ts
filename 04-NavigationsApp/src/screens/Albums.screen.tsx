import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/theme';
import { AuthContext } from '../context/AuthContext';

export const Albums = () => {
  const { logout, authState: { isLoggedIn } } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>
      { isLoggedIn && <Button title="Logout" onPress={logout} /> }
    </View>
  );
};
