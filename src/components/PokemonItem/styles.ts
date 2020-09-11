import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex-direction: row;
  border-bottom-width: ${hp('0.1%')}px;
  border-color: #c3c3c3;
  min-width: ${wp('20%')}px;
  height: ${hp('12%')}px;
  align-items: center;
  padding: 0 ${wp('2%')}px;
`;

export const Thumbnail = styled.Image`
  width: ${wp('23%')}px;
  height: ${hp('10%')}px;
`;

export const Title = styled.Text`
  margin-left: ${wp('2%')}px;
  font-size: ${hp('2.8%')}px;
  text-transform: capitalize;
`;
