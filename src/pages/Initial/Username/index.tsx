import React from 'react';
import {View, Text} from 'react-native';
import bg from '../../../assets/bg.png';
import next from '../../../assets/next.png';

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
        <BtnContainer>
          <BtnImg source={next} />
        </BtnContainer>
      </FooterContainer>
    </Container>
  );
};

export default Username;
