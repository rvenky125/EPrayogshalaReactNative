import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomNavGraph from './core/navigation/bottom_nav/BottomNavGraph';

export const App = () => {
  return (
    <SafeAreaProvider>
      <BottomNavGraph />
    </SafeAreaProvider>
  );
};

export default App;
