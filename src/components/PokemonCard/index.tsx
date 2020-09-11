import React from 'react';
import Pokemon from '../../models/pokemon';
import close from '../../assets/close.png';

import {
  Container,
  Header,
  Title,
  ImageContainer,
  Image,
  Footer,
  Weakness,
  Badge,
  CloseBtn,
  CloseImg,
} from './styles';

interface Props {
  pokemon?: Pokemon;
  toogle: (value: React.SetStateAction<boolean>) => void;
}

const PokemonCard: React.FC<Props> = ({pokemon, toogle}: Props) => {
  return (
    <Container>
      <Header>
        <Title>{pokemon?.name}</Title>
        <CloseBtn onPress={() => toogle(false)}>
          <CloseImg source={close} />
        </CloseBtn>
      </Header>
      <ImageContainer>
        <Image source={{uri: pokemon?.thumbnailImage}} resizeMode="contain" />
      </ImageContainer>
      <Footer>
        {pokemon?.weakness.map((item) => (
          <Badge>
            <Weakness>{item}</Weakness>
          </Badge>
        ))}
      </Footer>
    </Container>
  );
};

export default PokemonCard;
