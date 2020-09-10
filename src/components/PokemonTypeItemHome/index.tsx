import React from 'react';

import {Container, Thumbnail, Title} from './styles';

interface Props {
  thumbnail: string;
  name: string;
}

const PokemonTypeItemHome: React.FC<Props> = ({thumbnail, name}: Props) => {
  return (
    <Container>
      <Thumbnail source={{uri: thumbnail}} />
      <Title>{name}</Title>
    </Container>
  );
};

export default PokemonTypeItemHome;
