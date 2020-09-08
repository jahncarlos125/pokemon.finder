import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Welcome from '../pages/Initial/Welcome';
import Username from '../pages/Initial/Username';
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
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <InitialRoutesStack.Screen name="Welcome" component={Welcome} />
        <InitialRoutesStack.Screen name="Username" component={Username} />
      </InitialRoutesStack.Navigator>
    </>
  );
};

export default InitialRoutes;
