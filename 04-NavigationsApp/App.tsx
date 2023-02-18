import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
//import { StackNavigator } from './src/navigator/StackNavigator';
import { LateralMenuFinal } from './src/navigator/LateralMenuFinal';
import { colors } from './src/theme/theme';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: colors.primary,
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <LateralMenuFinal />
    </NavigationContainer>
  );
};

export default App;
