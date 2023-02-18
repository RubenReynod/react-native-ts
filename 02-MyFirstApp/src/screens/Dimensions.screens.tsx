import React from 'react';
import { Text, View, StyleSheet, Dimensions as Dim, useWindowDimensions } from 'react-native';

// const { width, height } = Dim.get('window');

export const Dimensions = () => {
  const  { width, height } = useWindowDimensions();
  return (
    <View>
        <View style={styles.container}>
          <View style={{ ...styles.cajaMorada, width: width * 0.70 }} />
          <View style={styles.cajaNaranja} />
        </View>
        <Text style={styles.title}>W: { width }, H: { height }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: 'purple',
    //width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
