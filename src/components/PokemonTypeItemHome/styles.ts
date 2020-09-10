import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.TouchableOpacity`
  margin: 0 ${wp('2%')}px;
  height: ${hp('12%')}px;
  justify-content: center;
  align-items: center;
`;

export const Thumbnail = styled.Image`
  width: ${wp('15%')}px;
  height: ${hp('8%')}px;
`;

export const Title = styled.Text`
  font-size: ${hp('2.2%')}px;
  text-transform: capitalize;
`;
