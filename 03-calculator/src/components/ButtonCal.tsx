import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

export enum Colors {
  gray = '#9b9b9b',
  black = '#2d2d2d',
  orange = '#ff9427',
}

interface Props {
  text: string;
  color?: Colors;
  largeButton?: boolean;
  onPress: (val: string) => void;
}

const ButtonCal: FC<Props> = ({
  text,
  color = Colors.black,
  largeButton,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress(text)}>
      <View
        style={[
          styles.button,
          {backgroundColor: color, width: largeButton ? 180 : 80},
        ]}>
        <Text
          style={[
            styles.txtButton,
            {color: color === Colors.gray ? 'black' : 'white'},
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCal;
