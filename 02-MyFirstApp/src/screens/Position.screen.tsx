import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Position = () => {
  return (
    <View style={ styles.contsiner }>
      <View style={ styles.greenBox } />
      <View style={ styles.purpleBox } />
      <View style={ styles.orangeBox } />
    </View>
  );
};

const styles = StyleSheet.create({
  contsiner: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  greenBox: {
    //width: 100,
    //height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    //position: 'absolute',
    //bottom: 0,
    //left: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
