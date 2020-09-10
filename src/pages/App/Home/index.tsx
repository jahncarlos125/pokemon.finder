import React, {useLayoutEffect} from 'react';
import {useApp} from '../../../contexts/app';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import PokemonTypeItemHome from '../../../components/PokemonTypeItemHome';
import {Container} from './styles';

const Home: React.FC = () => {
  const {types} = useApp();
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

  return (
    <Container>
      <FlatList
        data={types}
        horizontal
        keyExtractor={(type) => type.name}
        renderItem={({item}) => (
          <PokemonTypeItemHome
            name={item.name}
            thumbnail={item.thumbnailImage}
          />
        )}
      />
    </Container>
  );
};

export default Home;
