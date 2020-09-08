import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../pages/Initial/Welcome';
import {StatusBar} from 'react-native';
// import { Container } from './styles';

const InitialRoutesStack = createStackNavigator();
const InitialRoutes: React.FC = () => {
  return (
    <>
      <StatusBar hidden />
      <InitialRoutesStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <InitialRoutesStack.Screen name="Welcome" component={Welcome} />
      </InitialRoutesStack.Navigator>
    </>
  );
};

export default InitialRoutes;
