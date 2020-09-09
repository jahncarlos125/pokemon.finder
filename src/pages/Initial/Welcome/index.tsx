import React from 'react';
import bg from '../../../assets/bg.png';
import pokemonLogo from '../../../assets/pokemon-logo.png';
import finderLogo from '../../../assets/finder.png';
import pikachu from '../../../assets/pikachu.png';
import {
  Container,
  HeaderContainer,
  PokemonLogo,
  FinderLogo,
  BodyContainer,
  BtnContainer,
  BtnText,
  FooterContainer,
  FooterImg,
} from './styles';
import {useNavigation} from '@react-navigation/native';

const Welcome: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container source={bg}>
      <HeaderContainer>
        <PokemonLogo source={pokemonLogo} />
        <FinderLogo source={finderLogo} />
      </HeaderContainer>
      <BodyContainer>
        <BtnContainer onPress={() => navigation.navigate('Username')}>
          <BtnText>Let's go!</BtnText>
        </BtnContainer>
      </BodyContainer>
      <FooterContainer>
        <FooterImg source={pikachu} />
      </FooterContainer>
    </Container>
  );
};

export default Welcome;
