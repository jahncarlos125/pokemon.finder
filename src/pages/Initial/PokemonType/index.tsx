import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import bg from '../../../assets/bg.png';
import next from '../../../assets/next.png';
import close from '../../../assets/close.png';
import chevron from '../../../assets/chevron.png';
import Modal from 'react-native-modal';
import {
  Container,
  HeaderContainer,
  HeaderText,
  BodyContainer,
  BodyText,
  SelectBtnContainer,
  SelectText,
  SelectBtnImg,
  FooterContainer,
  BtnContainer,
  BtnImg,
  HeaderBackBtnContainer,
  HeaderBackBtnImg,
  ModalContainer,
  ModalHeader,
  ModalHeaderText,
  ModalFooter,
  ModalFooterBtn,
  ModalFooterBtnText,
  style,
} from './styles';
import PokemonTypeItem from '../../../components/PokemonTypeItem';
import {useNavigation} from '@react-navigation/native';
import {useApp} from '../../../contexts/app';

const PokemonType: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const {user, types, setShowInitial, choice, setChoice} = useApp();

  function toogleType(name: string): void {
    setChoice(name);
  }

  function done(): void {
    setShowInitial(false);
  }

  return (
    <Container source={bg}>
      <HeaderContainer>
        <HeaderBackBtnContainer onPress={() => navigation.goBack()}>
          <HeaderBackBtnImg source={chevron} />
        </HeaderBackBtnContainer>
        <HeaderText>Hello, {user}!</HeaderText>
      </HeaderContainer>
      <BodyContainer>
        <BodyText>...now tell us wich is your favorite Pokemon type:</BodyText>
        <SelectBtnContainer onPress={() => setVisible(!visible)}>
          <SelectText>{choice}</SelectText>
          <SelectBtnImg source={chevron} />
        </SelectBtnContainer>
      </BodyContainer>
      <FooterContainer>
        {choice !== 'Selecione' && (
          <BtnContainer onPress={() => done()}>
            <BtnImg source={next} />
          </BtnContainer>
        )}
      </FooterContainer>
      <Modal
        isVisible={visible}
        onBackdropPress={() => setVisible(!visible)}
        propagateSwipe={true}
        style={style.modal}>
        <ModalContainer>
          <ModalHeader>
            <ModalHeaderText>Select your favorite pokemon type</ModalHeaderText>
            <BtnContainer onPress={() => setVisible(!visible)}>
              <BtnImg source={close} />
            </BtnContainer>
          </ModalHeader>
          <ScrollView showsVerticalScrollIndicator={false}>
            {types?.map((item: {name: string; thumbnailImage: string}) => (
              <PokemonTypeItem
                key={item.name}
                thumbnail={item.thumbnailImage}
                name={item.name}
                toogleChoice={toogleType}
                checked={item.name === choice}
              />
            ))}
          </ScrollView>
          <ModalFooter>
            <ModalFooterBtn onPress={() => setVisible(!visible)}>
              <ModalFooterBtnText>Confirm</ModalFooterBtnText>
            </ModalFooterBtn>
          </ModalFooter>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default PokemonType;
