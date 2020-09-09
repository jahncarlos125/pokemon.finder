import React from 'react';
import InitialRoutes from './initial.routes';
import {useApp} from '../contexts/app';
import AppRoutes from './app.routes';
import LottieView from 'lottie-react-native';
import pikachu from '../assets/pikachu-loading.json';

const Routes: React.FC = () => {
  const {showInitial, loading} = useApp();

  if (loading) {
    return <LottieView source={pikachu} autoPlay />;
  }

  return showInitial ? <InitialRoutes /> : <AppRoutes />;
};

export default Routes;
