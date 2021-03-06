import React from 'react';

import {Container, Thumbnail, Title} from './styles';

interface Props {
  thumbnail: string;
  name: string;
  toogle: (name: string) => void;
}

const PokemonTypeItemHome: React.FC<Props> = ({
  thumbnail,
  name,
  toogle,
}: Props) => {
  return (
    <Container onPress={() => toogle(name)}>
      <Thumbnail source={{uri: thumbnail}} />
      <Title>{name}</Title>
    </Container>
  );
};

export default PokemonTypeItemHome;
