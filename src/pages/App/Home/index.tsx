import React, {useLayoutEffect, useEffect, useState} from 'react';
import {useApp} from '../../../contexts/app';
import {useNavigation} from '@react-navigation/native';
import {FlatList, ActivityIndicator} from 'react-native';
import PokemonTypeItemHome from '../../../components/PokemonTypeItemHome';
import PokemonItem from '../../../components/PokemonItem';
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

const Home: React.FC = () => {
  const {types, pokemons, choice} = useApp();
  const [pokemonsByType, setPokemonsByType] = useState<Pokemon[]>([]);
  const [filter, setFilter] = useState(choice);
  const [loading, setLoading] = useState(false);
  const [descOrder, setDescOrder] = useState(true);
  const navigation = useNavigation();

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

  function toogleType(name: string): void {
    setFilter(name);
  }

  function changeOrder() {
    setDescOrder(!descOrder);
  }

  return (
    <Container>
      <FlatList
        data={types}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{maxHeight: 100}}
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
            data={
              descOrder
                ? pokemonsByType.sort((a, b) => a.name.localeCompare(b.name))
                : pokemonsByType.sort((a, b) => b.name.localeCompare(a.name))
            }
            keyExtractor={(type) =>
              type.id.toString() +
              type.height.toString() +
              type.weight.toString()
            }
            renderItem={({item}) => (
              <PokemonItem name={item.name} thumbnail={item.thumbnailImage} />
            )}
          />
        )}
      </Content>
    </Container>
  );
};

export default Home;
