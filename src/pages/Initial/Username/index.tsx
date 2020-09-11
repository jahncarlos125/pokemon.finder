import React from 'react';
import bg from '../../../assets/bg.png';
import next from '../../../assets/next.png';
import {useNavigation} from '@react-navigation/native';
import {useApp} from '../../../contexts/app';
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
import {translate} from '../../../locales';

const Username: React.FC = () => {
  const navigation = useNavigation();
  const {setUser, user} = useApp();

  function done(): void {
    navigation.navigate('PokemonType');
  }

  return (
    <Container source={bg}>
      <HeaderContainer>
        <HeaderText>{translate('usernameTitle')}</HeaderText>
      </HeaderContainer>
      <BodyContainer>
        <BodyText>{translate('usernameInput')}</BodyText>
        <BodyInput
          selectionColor="#FFF"
          value={user}
          onChangeText={(text) => setUser(text)}
        />
      </BodyContainer>
      {user.length > 0 && (
        <FooterContainer>
          <BtnContainer onPress={() => done()}>
            <BtnImg source={next} />
          </BtnContainer>
        </FooterContainer>
      )}
    </Container>
  );
};

export default Username;
