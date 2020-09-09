import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/App/Home';
// import { Container } from './styles';

const AppRoutesStack = createStackNavigator();
const AppRoutes: React.FC = () => {
  return (
    <AppRoutesStack.Navigator>
      <AppRoutesStack.Screen name="Home" component={Home} />
    </AppRoutesStack.Navigator>
  );
};

export default AppRoutes;
