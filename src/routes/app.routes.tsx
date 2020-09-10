import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/App/Home';
import {StatusBar} from 'react-native';

const AppRoutesStack = createStackNavigator();
const AppRoutes: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#55C7A1" />
      <AppRoutesStack.Navigator>
        <AppRoutesStack.Screen name="Home" component={Home} />
      </AppRoutesStack.Navigator>
    </>
  );
};

export default AppRoutes;
