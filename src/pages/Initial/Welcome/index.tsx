import React from 'react';
import bg from '../../../assets/bg.png';
import pokemonLogo from '../../../assets/pokemon-logo.png';
import finderLogo from '../../../assets/finder.png';
import pikachu from '../../../assets/pikachu.png';
import {
  Container,
  LogoContainer,
  PokemonLogo,
  FinderLogo,
  BodyContainer,
  BtnContainer,
  BtnText,
  FooterContainer,
  FooterImg,
} from './styles';

const Welcome: React.FC = () => {
  return (
    <Container source={bg}>
      <LogoContainer>
        <PokemonLogo source={pokemonLogo} />
        <FinderLogo source={finderLogo} />
      </LogoContainer>
      <BodyContainer>
        <BtnContainer>
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
