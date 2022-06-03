import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../screens/home';

const Tab = createBottomTabNavigator();

export const CustomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
    </Tab.Navigator>
  );
};
