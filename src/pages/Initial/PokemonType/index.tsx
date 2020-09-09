import React, {useState, useEffect} from 'react';
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
} from './styles';
import api from '../../../services/api';
import PokemonTypeItem from '../../../components/PokemonTypeItem';
import {useNavigation} from '@react-navigation/native';

const PokemonType: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [types, setTypes] = useState([]);
  const [choice, setChoice] = useState('Selecione');
  const navigation = useNavigation();

  useEffect(() => {
    async function getData() {
      const {data} = await api.get('/types.json');
      setTypes(data.results);
    }

    getData();
  }, []);

  function toogleType(name: string): void {
    setChoice(name);
  }

  return (
    <Container source={bg}>
      <HeaderContainer>
        <HeaderBackBtnContainer onPress={() => navigation.goBack()}>
          <HeaderBackBtnImg source={chevron} />
        </HeaderBackBtnContainer>
        <HeaderText>Hello, Jon Doe</HeaderText>
      </HeaderContainer>
      <BodyContainer>
        <BodyText>...now tell us wich is your favorite Pokemon type:</BodyText>
        <SelectBtnContainer onPress={() => setVisible(!visible)}>
          <SelectText>{choice}</SelectText>
          <SelectBtnImg source={chevron} />
        </SelectBtnContainer>
      </BodyContainer>
      <FooterContainer>
        <BtnContainer>
          <BtnImg source={next} />
        </BtnContainer>
      </FooterContainer>
      <Modal
        isVisible={visible}
        onBackdropPress={() => setVisible(!visible)}
        propagateSwipe={true}
        style={{
          justifyContent: 'flex-end',
          margin: 0,
        }}>
        <ModalContainer>
          <ModalHeader>
            <ModalHeaderText>Select your favorite pokemon type</ModalHeaderText>
            <BtnContainer onPress={() => setVisible(!visible)}>
              <BtnImg source={close} />
            </BtnContainer>
          </ModalHeader>
          <ScrollView showsVerticalScrollIndicator={false}>
            {types.map((item: {name: string; thumbnailImage: string}) => (
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
