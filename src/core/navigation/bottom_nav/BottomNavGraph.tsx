import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import BottomNavNames from './BottomNavRoutes';
import ExperimentsScreen from '../../../presentation/screens/screen_experiments/ExperimentsScreen';
import SettingsScreen from '../../../presentation/screens/screen_settings/SettingsScreen';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const BottomNavGraph = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={BottomNavNames.Experiments}
          component={ExperimentsScreen}
        />
        <Tab.Screen name={BottomNavNames.Settings} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavGraph;
