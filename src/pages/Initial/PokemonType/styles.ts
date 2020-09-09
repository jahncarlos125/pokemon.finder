import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  padding-left: 30px;
`;

export const HeaderBackBtnContainer = styled.TouchableOpacity`
  padding: 30px 0;
`;

export const HeaderBackBtnImg = styled.Image``;

export const HeaderText = styled.Text`
  margin-top: 45px;
  color: #fff;
  font-size: 30px;
`;

export const BodyContainer = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const BodyText = styled.Text`
  color: #fff;
  font-size: 25px;
`;

export const SelectBtnContainer = styled.TouchableOpacity`
  padding: 30px 0;
  flex-direction: row;
  align-items: center;
`;

export const SelectText = styled.Text`
  color: #fff;
  font-size: 25px;
  flex: 1;
  border-bottom-width: 2px;
  border-color: #fff;
  text-transform: capitalize;
  padding-bottom: 20px;
`;

export const SelectBtnImg = styled.Image`
  margin-left: -30px;
  margin-bottom: 20px;
  transform: rotate(270deg);
`;

export const BodyInput = styled.TextInput`
  margin-top: 30px;
  border-bottom-width: 2px;
  border-color: #fff;
  font-size: 20px;
  color: #fff;
`;

export const FooterContainer = styled.View`
  align-items: center;
  padding-bottom: 20px;
`;

export const BtnContainer = styled.TouchableOpacity``;

export const BtnImg = styled.Image``;

export const ModalContainer = styled.View`
  height: 600px;
  background-color: #fff;
  padding: 0 10px;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 0;
`;

export const ModalHeaderText = styled.Text`
  font-size: 20px;
`;

export const ModalFooter = styled.View`
  justify-content: center;
`;

export const ModalFooterBtn = styled.TouchableOpacity`
  padding: 20px;
  background-color: #ec2a76;
  margin: 5px 50px;
  border-radius: 10px;
  align-items: center;
`;

export const ModalFooterBtnText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const style = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
