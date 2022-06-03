import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//theme

// drawer and content more menus
import {navigationRef} from '../utils/navigation';
import {CustomTabs} from './tabs/';

export const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <CustomTabs />
    </NavigationContainer>
  );
};
