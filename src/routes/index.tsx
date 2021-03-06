import React from 'react';
import InitialRoutes from './initial.routes';
import {useApp} from '../contexts/app';
import AppRoutes from './app.routes';
import LottieView from 'lottie-react-native';
import pikachu from '../assets/pikachu-loading.json';
import {StatusBar, ImageBackground} from 'react-native';
import bg from '../assets/bg.png';

const Routes: React.FC = () => {
  const {showInitial, loading} = useApp();

  if (loading) {
    return (
      <ImageBackground source={bg} style={{flex: 1}}>
        <StatusBar hidden />
        <LottieView source={pikachu} autoPlay />
      </ImageBackground>
    );
  }

  return showInitial ? <InitialRoutes /> : <AppRoutes />;
};

export default Routes;
