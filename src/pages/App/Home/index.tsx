import React, {useLayoutEffect, useEffect, useState} from 'react';
import {useApp} from '../../../contexts/app';
import {useNavigation} from '@react-navigation/native';
import {FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import RNExitApp from 'react-native-exit-app';
import PokemonTypeItemHome from '../../../components/PokemonTypeItemHome';
import PokemonItem from '../../../components/PokemonItem';
import Modal from 'react-native-modal';
import {
  Container,
  Content,
  ContentHeader,
  ContentHeaderTitle,
  OrderedBtn,
  OrderedBtnImg,
  OrderedBtnText,
} from './styles';
import Pokemon from '../../../models/pokemon';
import arrow from '../../../assets/arrow.png';
import {Toolbar} from 'react-native-material-ui';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PokemonCard from '../../../components/PokemonCard';

const Home: React.FC = () => {
  const {types, pokemons, choice} = useApp();
  const [pokemonsByType, setPokemonsByType] = useState<Pokemon[]>([]);
  const [pokemonsByTerm, setPokemonsByTerm] = useState<Pokemon[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [filter, setFilter] = useState(choice);
  const [loading, setLoading] = useState(false);
  const [descOrder, setDescOrder] = useState(true);
  const [term, setTerm] = useState('');
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Pokemon Finder',
      headerStyle: {
        backgroundColor: '#55C7A1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {},
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  useEffect(() => {
    setLoading(true);
    const pokemonFilter = pokemons.filter((item) => item.type.includes(filter));
    const removeDuplicates = pokemonFilter.reduce((acc: Pokemon[], current) => {
      const x = acc.find((item) => item.id === current.id);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    setPokemonsByType(removeDuplicates);
  }, [filter, pokemons]);

  useEffect(() => {
    setLoading(false);
  }, [pokemonsByType]);

  useEffect(() => {
    if (term) {
      const search = pokemonsByType.filter((item) => item.slug.includes(term));
      setPokemonsByTerm(search);
      setLoading(false);
    }
  }, [pokemonsByType, term]);

  function toogleType(name: string): void {
    setFilter(name);
  }

  function changeOrder() {
    setDescOrder(!descOrder);
  }

  function dataRender() {
    if (term) {
      if (descOrder) {
        return pokemonsByTerm.sort((a, b) => a.name.localeCompare(b.name));
      }
      return pokemonsByTerm.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      if (descOrder) {
        return pokemonsByType.sort((a, b) => a.name.localeCompare(b.name));
      }
      return pokemonsByType.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  function moreInfo(currentPokemon: Pokemon) {
    setPokemon(currentPokemon);
    setModalVisible(!modalVisible);
  }

  return (
    <Container>
      <Toolbar
        leftElement="power-settings-new"
        onLeftElementPress={() => RNExitApp.exitApp()}
        centerElement="Pokemon Finder"
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
          autoCapitalize: 'none',
          onChangeText: (text) => {
            setTerm(text);
          },
        }}
        style={{
          container: {
            backgroundColor: '#55C7A1',
          },
          titleText: {
            fontSize: hp('3%'),
          },
        }}
      />
      <FlatList
        data={types}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{maxHeight: hp('12%'), backgroundColor: '#FFF'}}
        horizontal
        keyExtractor={(type) => type.name}
        renderItem={({item}) => (
          <PokemonTypeItemHome
            name={item.name}
            thumbnail={item.thumbnailImage}
            toogle={toogleType}
          />
        )}
      />
      <Content>
        <ContentHeader>
          <ContentHeaderTitle>Pokemon</ContentHeaderTitle>
          <OrderedBtn onPress={() => changeOrder()}>
            <OrderedBtnText>Name</OrderedBtnText>
            <OrderedBtnImg descOrder={descOrder} source={arrow} />
          </OrderedBtn>
        </ContentHeader>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={dataRender()}
            keyExtractor={(type) =>
              type.id.toString() +
              type.height.toString() +
              type.weight.toString()
            }
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={() => moreInfo(item)}>
                  <PokemonItem
                    name={item.name}
                    thumbnail={item.thumbnailImage}
                  />
                </TouchableOpacity>
              );
            }}
          />
        )}
      </Content>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}>
        <PokemonCard pokemon={pokemon} toogle={setModalVisible} />
      </Modal>
    </Container>
  );
};

export default Home;
