import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #55c7a1;
`;

export const SelectPokemons = styled.FlatList``;

export const Content = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${hp('1.5%')}px;
  border-bottom-width: ${hp('0.1%')}px;
  border-color: #c3c3c3;
`;

export const ContentHeaderTitle = styled.Text`
  font-size: ${hp('2.2%')}px;
`;

export const OrderedBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const OrderedBtnText = styled.Text`
  font-size: ${hp('2.2%')}px;
`;

export const OrderedBtnImg = styled.Image<{descOrder: boolean}>`
  margin: 0 ${wp('2%')}px;
  transform: ${(props) =>
    props.descOrder ? 'rotate(180deg)' : 'rotate(0deg)'};
`;
