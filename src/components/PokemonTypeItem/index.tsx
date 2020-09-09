import React from 'react';
import radioOff from '../../assets/radio-off.png';
import radioOn from '../../assets/radio-on.png';

import {Container, Thumbnail, RadioBtnImg, Left, Title} from './styles';

interface Props {
  key: string;
  thumbnail: string;
  name: string;
  toogleChoice: (name: string) => void;
  checked: boolean;
}

const PokemonTypeItem: React.FC<Props> = ({
  thumbnail,
  name,
  toogleChoice,
  checked,
}: Props) => {
  return (
    <Container onPress={() => toogleChoice(name)}>
      <Left>
        <Thumbnail source={{uri: thumbnail}} resizeMode="contain" />
        <Title>{name}</Title>
      </Left>
      <RadioBtnImg source={checked ? radioOn : radioOff} />
    </Container>
  );
};

export default PokemonTypeItem;
