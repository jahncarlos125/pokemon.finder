import React from 'react';
import bg from '../../../assets/bg.png';
import next from '../../../assets/next.png';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  HeaderContainer,
  HeaderText,
  BodyContainer,
  BodyText,
  BodyInput,
  FooterContainer,
  BtnContainer,
  BtnImg,
} from './styles';

const Username: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container source={bg}>
      <HeaderContainer>
        <HeaderText>Let's meet each other first?</HeaderText>
      </HeaderContainer>
      <BodyContainer>
        <BodyText>First we need to know your name...</BodyText>
        <BodyInput selectionColor="#FFF" />
      </BodyContainer>
      <FooterContainer>
        <BtnContainer onPress={() => navigation.navigate('PokemonType')}>
          <BtnImg source={next} />
        </BtnContainer>
      </FooterContainer>
    </Container>
  );
};

export default Username;
