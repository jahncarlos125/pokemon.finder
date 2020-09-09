import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface Types {
  thumbnailImage: string;
  name: string;
}

interface Pokemon {
  abilities: string[];
  detailPageURL: string;
  weight: number;
  weakness: string[];
  number: string;
  height: number;
  collectibles_slug: string;
  featured: string;
  slug: string;
  name: string;
  thumbnailAltText: string;
  thumbnailImage: string;
  id: number;
  type: string[];
}

interface AppContextData {
  user: string;
  showInitial: boolean;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  doneInitialStep: () => Promise<void>;
  types: Types[];
  choice: string;
  setChoice: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  pokemons: Pokemon[];
}

interface Props {
  children: JSX.Element;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC<Props> = ({children}: Props) => {
  const [user, setUser] = useState('');
  const [showInitial, setShowInitial] = useState(true);
  const [choice, setChoice] = useState('Selecione');
  const [types, setTypes] = useState<Types[]>([]);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  async function doneInitialStep(): Promise<void> {
    try {
      setShowInitial(false);
      await AsyncStorage.setItem('@pokemon:user', user);
      await AsyncStorage.setItem('@pokemon:showInitial', JSON.stringify(false));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function getPokemonTypes() {
      const {data} = await api.get('/types.json');
      setTypes(data.results);
    }

    async function getPokemons() {
      const {data} = await api.get('/pokemons.json');
      setPokemons(data);
    }

    async function getInfo() {
      setTimeout(async () => {
        try {
          const userPersisted = await AsyncStorage.getItem('@pokemon:user');
          console.log('getInfo -> userPersisted', userPersisted);
          const showInitialPersisted = await AsyncStorage.getItem(
            '@pokemon:showInitial',
          );
          console.log('getInfo -> showInitialPersisted', showInitialPersisted);
          if (userPersisted && showInitialPersisted) {
            setUser(userPersisted);
            setShowInitial(JSON.parse(showInitialPersisted));
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }, 2000);
    }
    getPokemonTypes();
    getPokemons();
    getInfo();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        showInitial,
        setUser,
        doneInitialStep,
        types,
        choice,
        setChoice,
        loading,
        pokemons,
      }}>
      {children}
    </AppContext.Provider>
  );
};

function useApp(): AppContextData {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApp must be used within an AppProvider.');
  }

  return context;
}

export {AppContext, useApp};
