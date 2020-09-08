import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../pages/Initial/Welcome';
// import { Container } from './styles';

const InitialRoutesStack = createStackNavigator();
const InitialRoutes: React.FC = () => {
  return (
    <InitialRoutesStack.Navigator>
      <InitialRoutesStack.Screen name="Welcome" component={Welcome} />
    </InitialRoutesStack.Navigator>
  );
};

export default InitialRoutes;
