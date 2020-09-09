import React from 'react';
import InitialRoutes from './initial.routes';
import {useApp} from '../contexts/app';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const {showInitial} = useApp();
  return showInitial ? <InitialRoutes /> : <AppRoutes />;
};

export default Routes;
