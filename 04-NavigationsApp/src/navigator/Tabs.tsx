import React, { FC } from 'react';
import { Platform, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1 } from '../screens/Tab1.screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/theme';
import { TopTabs } from './TopTabs';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS/> : <TabAndroid/>;
};

const BtnTabAndroid = createMaterialBottomTabNavigator();

const TabAndroid = () => {
  return (
    <BtnTabAndroid.Navigator
      sceneAnimationEnabled
      activeColor="#fff"
      inactiveColor="rgba(255,255,255, 0.5)"
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string;

          switch (route.name){
            case 'Tab1':
              iconName = 'folder-open-outline';
              break;
            case 'Tab2':
              iconName = 'chatbubble-outline';
              break;
            case 'StackNavigator':
              iconName = 'people-outline';
              break;
          }
          return <Icon name={iconName} color={color} size={25} />;
        },
      })}
    >
      <BtnTabAndroid.Screen name="Tab1" component={Tab1} />
      <BtnTabAndroid.Screen name="Tab2" component={TopTabs} />
      <BtnTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BtnTabAndroid.Navigator>
  );
};

const BtnTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BtnTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: ({ color }) => {
          let iconName: string;

          switch (route.name){
            case 'Tab1':
              iconName = 'folder-open-outline';
              break;
            case 'Tab2':
              iconName = 'chatbubble-outline';
              break;
            case 'StackNavigator':
              iconName = 'people-outline';
              break;
          }
          return <Icon name={iconName} color={color} size={25} />;
        },
      }) }
    >
      <BtnTabIOS.Screen name="Tab1" component={Tab1} />
      <BtnTabIOS.Screen name="Tab2" component={TopTabs} />
      <BtnTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BtnTabIOS.Navigator>
  );
};
