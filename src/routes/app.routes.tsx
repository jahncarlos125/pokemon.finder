import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../pages/Initial/Welcome';
// import { Container } from './styles';

const AppRoutesStack = createStackNavigator();
const AppRoutes: React.FC = () => {
  return (
    <AppRoutesStack.Navigator>
      <AppRoutesStack.Screen name="Welcome" component={Welcome} />
    </AppRoutesStack.Navigator>
  );
};

export default AppRoutes;
