import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExpermentsNavRoutes from './ExpermentsNavRoutes';
import AcidBaseTitration from '../../../presentation/screens/screen_acid_base_tit/AcidBaseTitration';
import CustomTopBar from '../../components/CustomTopBar';

const Stack = createNativeStackNavigator();

const ExperimentsNavGraph = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: CustomTopBar,
      }}>
      <Stack.Screen
        name={ExpermentsNavRoutes.AcidBase}
        component={AcidBaseTitration}
      />
    </Stack.Navigator>
  );
};

export default ExperimentsNavGraph;
