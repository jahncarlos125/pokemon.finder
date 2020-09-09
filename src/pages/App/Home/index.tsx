import React from 'react';
import {Text} from 'react-native';
import {useApp} from '../../../contexts/app';

import {Container} from './styles';

const Home: React.FC = () => {
  const {pokemons} = useApp();
  return <Container />;
};

export default Home;
