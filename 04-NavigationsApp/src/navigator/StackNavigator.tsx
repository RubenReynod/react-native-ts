import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Page1 } from '../screens/Page1.screen';
import { Page2 } from '../screens/Page2.screen';
import { Page3 } from '../screens/Page3.screen';
import { Person } from '../screens/Person.screen';

export type RootStackParams = {
  Page1: undefined
  Page2: undefined
  Page3: undefined
  PagePerson: { id: number, name: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const  StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName="Page2"
      screenOptions={{
        headerStyle: {
          elevation: 0, // Android
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="Page1" options={{ title: 'Page 1' }} component={Page1} />
      <Stack.Screen name="Page2" options={{ title: 'Page 2' }} component={Page2} />
      <Stack.Screen name="Page3" options={{ title: 'Page 3' }} component={Page3} />
      <Stack.Screen name="PagePerson" options={{ title: 'Page person' }} component={Person} />
    </Stack.Navigator>
  );
};
