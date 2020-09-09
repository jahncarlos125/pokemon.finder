import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 5px 0;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Thumbnail = styled.Image`
  width: 60px;
  height: 60px;
`;

export const Title = styled.Text`
  padding: 0 20px;
  font-size: 20px;
  text-transform: capitalize;
`;

export const RadioButton = styled.TouchableOpacity``;

export const RadioBtnImg = styled.Image`
  padding: 0 10px;
`;
