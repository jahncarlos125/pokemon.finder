import React, {createContext, useContext, useState, useEffect} from 'react';
import api from '../services/api';

interface Types {
  thumbnailImage: string;
  name: string;
}

interface AppContextData {
  user: string;
  showInitial: boolean;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setShowInitial: React.Dispatch<React.SetStateAction<boolean>>;
  types: Types[] | undefined;
  choice: string;
  setChoice: React.Dispatch<React.SetStateAction<string>>;
}

interface Props {
  children: JSX.Element;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC<Props> = ({children}: Props) => {
  const [user, setUser] = useState('');
  const [showInitial, setShowInitial] = useState(true);
  const [choice, setChoice] = useState('Selecione');
  const [types, setTypes] = useState<Types[]>();

  useEffect(() => {
    async function getData() {
      const {data} = await api.get('/types.json');
      setTypes(data.results);
    }

    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        showInitial,
        setUser,
        setShowInitial,
        types,
        choice,
        setChoice,
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
