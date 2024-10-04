import { createContext, useState } from 'react';
import { useFetch } from '../Hooks/useFetch';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // Products
  const API = 'https://storeu-api-diplomado.vercel.app/api';
  const { data: products, loading: productsLoading } = useFetch(
    `${API}/products`
  );

  // Shopping Cart
  const [cartProducts, setCartProducts] = useState([]);
  console.log(cartProducts);

  const addProductToCart = (product) => {
    if (!cartProducts.includes(product))
      setCartProducts([...cartProducts, product]);
  };

  const removeProductFromCart = (id) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(filteredProducts);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        productsLoading,
        cartProducts,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
