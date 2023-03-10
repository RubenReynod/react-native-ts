import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/theme';
import { AuthContext } from '../context/AuthContext';

export const Contacts = () => {
  const { signIn, authState: { isLoggedIn } } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>

      { !isLoggedIn && <Button title="SignIn" onPress={signIn} /> }
    </View>
  );
};
