import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    fontSize: 20,
    marginTop: 50,
    // width: 250,
    borderWidth: 10,
    // backgroundColor: 'red',
  },
});
