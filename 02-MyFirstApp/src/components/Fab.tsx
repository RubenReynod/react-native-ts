import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
  title: string
  position?: 'left' | 'right'
  onPress: () => void
}

export const Fab = ({ title, position = 'right', onPress }: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPress}
        style={[styles.fabLocation, {[position]: 20} ]}
      >
        <View style={styles.fab}>
          <Text style={styles.fabTxt}>{ title }</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View style={[styles.fabLocation, {[position]: 20} ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
        >
          <View style={styles.fab}>
            <Text style={styles.fabTxt}>{ title }</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };


  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 20,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  fabTxt: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
