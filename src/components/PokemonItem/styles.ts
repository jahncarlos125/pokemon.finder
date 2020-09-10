import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: #c3c3c3;
  min-width: 80px;
  height: 100px;
  align-items: center;
  padding: 0 10px;
`;

export const Thumbnail = styled.Image`
  width: 90px;
  height: 90px;
`;

export const Title = styled.Text`
  margin-left: 10px;
  font-size: 22px;
  text-transform: capitalize;
`;
