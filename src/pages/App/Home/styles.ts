import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #55c7a1;
`;

export const SelectTypes = styled.FlatList`
  max-height: 100px;
`;

export const SelectPokemons = styled.FlatList``;

export const Content = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #c3c3c3;
`;

export const ContentHeaderTitle = styled.Text`
  font-size: 16px;
`;

export const OrderedBtn = styled.TouchableOpacity`
  flex-direction: row;
`;

export const OrderedBtnText = styled.Text`
  font-size: 16px;
`;

export const OrderedBtnImg = styled.Image<{descOrder: boolean}>`
  margin: 0 10px;
  transform: ${(props) =>
    props.descOrder ? 'rotate(180deg)' : 'rotate(0deg)'};
`;
