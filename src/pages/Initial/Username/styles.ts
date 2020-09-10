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
  margin-top: ${hp('5%')}px;
  padding-left: ${wp('8%')}px;
  /* padding-left: 30px; */
`;

export const HeaderText = styled.Text`
  margin-top: ${hp('13%')}px;
  color: #fff;
  font-size: ${hp('3.8%')}px;
`;

export const BodyContainer = styled.View`
  flex: 1;
  padding: 0 ${wp('8%')}px;
`;

export const BodyText = styled.Text`
  color: #fff;
  font-size: ${hp('3.1%')}px;
`;

export const BodyInput = styled.TextInput`
  margin-top: ${hp('4%')}px;
  border-bottom-width: 2px;
  border-color: #fff;
  font-size: ${hp('3.1%')}px;
  color: #fff;
`;

export const FooterContainer = styled.View`
  align-items: center;
  padding-bottom: 20px;
`;

export const BtnContainer = styled.TouchableOpacity``;

export const BtnImg = styled.Image``;
