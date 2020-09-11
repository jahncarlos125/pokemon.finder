import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 0.6;
  margin: 0 ${wp('2%')}px;
  background-color: #fff;
  border-color: #55c7a1;
  border-width: ${wp('1%')}px;
  border-radius: 20px;
  overflow: hidden;
`;

export const Header = styled.View`
  background-color: #55c7a1;
  padding: ${hp('1.2%')}px ${wp('3%')}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: ${hp('3.1%')}px;
  font-weight: 500;
  flex: 1;
  text-align: center;
`;

export const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #c3c3c375;
  margin: ${hp('1%')}px ${wp('2%')}px;
  border-radius: 10px;
`;

export const Image = styled.Image`
  height: ${hp('40%')}px;
  width: ${wp('100%')}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  padding: ${hp('1.2%')}px ${wp('1.5%')}px;
  align-items: center;
`;

export const Badge = styled.View`
  padding: ${hp('1%')}px ${wp('2%')}px;
  margin: 0 ${wp('1%')}px;
  border-radius: 5px;
  background-color: #55c7a175;
`;

export const CloseBtn = styled.TouchableOpacity``;

export const CloseImg = styled.Image`
  align-self: flex-end;
  height: ${hp('3%')}px;
  width: ${wp('6%')}px;
`;

export const Weakness = styled.Text`
  font-family: Roboto-Light;
  font-size: ${hp('2%')}px;
`;
