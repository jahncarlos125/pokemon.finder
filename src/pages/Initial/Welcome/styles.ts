import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const PokemonLogo = styled.Image``;

export const FinderLogo = styled.Image``;

export const BodyContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const BtnContainer = styled.TouchableOpacity`
  background-color: #ec2a76;
  padding: 20px;
  margin: ${hp('10%')}px ${wp('15%')}px;
  border-radius: 10px;
  align-items: center;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: ${hp('3%')}px;
`;

export const FooterContainer = styled.View`
  align-items: flex-end;
`;

export const FooterImg = styled.Image``;
