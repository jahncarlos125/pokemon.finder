import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: ${hp('0.5%')}px 0;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Thumbnail = styled.Image`
  width: ${wp('15%')}px;
  height: ${hp('8%')}px;
`;

export const Title = styled.Text`
  padding: 0 ${wp('3%')}px;
  font-size: ${hp('2.2%')}px;
  text-transform: capitalize;
`;

export const RadioButton = styled.TouchableOpacity``;

export const RadioBtnImg = styled.Image`
  padding: 0 ${wp('2%')}px;
`;
