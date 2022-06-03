import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ScrollView, SafeAreaView} from 'react-native';

const CustomSafeArea = ({children}) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView keyboardShouldPersistTaps="handled">{children}</ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CustomSafeArea;
