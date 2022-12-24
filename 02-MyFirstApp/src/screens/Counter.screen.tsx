import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

const Counter = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {count}</Text>

      <Fab
        title="+1"
        onPress={() => setCount(count + 1)}
      />

      <Fab
        title="-1"
        position="left"
        onPress={() => setCount(count - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
});

export default Counter;
