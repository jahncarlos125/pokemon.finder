import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  min-width: 80px;
  min-height: 100px;
  justify-content: center;
  align-items: center;
`;

export const Thumbnail = styled.Image`
  width: 60px;
  height: 60px;
`;

export const Title = styled.Text`
  font-size: 16px;
  text-transform: capitalize;
`;
