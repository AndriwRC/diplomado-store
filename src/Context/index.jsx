import { createContext, useState } from 'react';
import { useFetch } from '../Hooks/useFetch';
import { useAsideMenu } from '../Hooks/useAsideMenu';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // Products
  const API = 'https://storeu-api-diplomado.vercel.app/api';
  const { data: products, loading: productsLoading } = useFetch(
    `${API}/products`
  );

  // Shopping Cart
  const [cartProducts, setCartProducts] = useState([]);

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

  const {
    isOpen: isCartOpen,
    openMenu: openCart,
    closeMenu: closeCart,
    toggleMenu: toggleCart,
  } = useAsideMenu(false);

  return (
    <AppContext.Provider
      value={{
        products,
        productsLoading,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
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
