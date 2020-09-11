import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  padding-left: ${wp('8%')}px;
`;

export const HeaderBackBtnContainer = styled.TouchableOpacity`
  padding: ${hp('5%')}px 0;
`;

export const HeaderBackBtnImg = styled.Image``;

export const HeaderText = styled.Text`
  margin-top: ${hp('5%')}px;
  color: #fff;
  font-size: ${hp('3.8%')}px;
`;

export const BodyContainer = styled.View`
  flex: 1;
  padding: 0 ${wp('8%')}px;
`;

export const BodyText = styled.Text`
  color: #fff;
  font-size: ${hp('3.1%')}px;
`;

export const SelectBtnContainer = styled.TouchableOpacity`
  padding: ${hp('5%')}px 0;
  flex-direction: row;
  align-items: center;
`;

export const SelectText = styled.Text`
  color: #fff;
  font-size: ${hp('3.1%')}px;
  flex: 1;
  border-bottom-width: ${hp('0.3%')}px;
  border-color: #fff;
  text-transform: capitalize;
  padding-bottom: ${hp('2.8%')}px;
`;

export const SelectBtnImg = styled.Image`
  margin-left: -30px;
  margin-bottom: ${hp('2.8%')}px;
  transform: rotate(270deg);
`;

export const BodyInput = styled.TextInput`
  margin-top: ${hp('3.8%')}px;
  border-bottom-width: ${hp('0.3%')}px;
  border-color: #fff;
  font-size: ${hp('3.1%')}px;
  color: #fff;
`;

export const FooterContainer = styled.View`
  align-items: center;
  padding-bottom: ${hp('3.8%')}px;
`;

export const BtnContainer = styled.TouchableOpacity``;

export const BtnImg = styled.Image``;

export const ModalContainer = styled.View`
  height: ${hp('75%')}px;
  background-color: #fff;
  padding: 0 ${wp('5%')}px;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: ${wp('6%')}px;
  padding-top: ${hp('2%')}px;
  padding-bottom: ${hp('1%')}px;
`;

export const ModalHeaderText = styled.Text`
  font-size: ${hp('2.8%')}px;
`;

export const ModalFooter = styled.View`
  justify-content: center;
`;

export const ModalFooterBtn = styled.TouchableOpacity`
  padding: ${hp('2.5%')}px 0;
  background-color: #ec2a76;
  margin: ${hp('1%')}px ${wp('10%')}px;
  border-radius: 10px;
  align-items: center;
`;

export const ModalFooterBtnText = styled.Text`
  color: #fff;
  font-size: ${hp('2.4%')}px;
`;

export const style = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
