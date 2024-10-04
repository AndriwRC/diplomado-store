import { createContext } from 'react';
import { useFetch } from '../Hooks/useFetch';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const API = 'https://storeu-api-diplomado.vercel.app/api';
  const { data: products, loading: productsLoading } = useFetch(
    `${API}/products`
  );

  return (
    <AppContext.Provider
      value={{
        products,
        productsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
