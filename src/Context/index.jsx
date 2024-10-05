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

  // Product Details
  const [productToShow, setProductToShow] = useState({});
  const {
    isOpen: isDetailsOpen,
    openMenu: openDetails,
    closeMenu: closeDetails,
  } = useAsideMenu(false);

  const showProduct = (product) => {
    setProductToShow(product);
    openDetails();
    closeCart();
  };

  // Shopping Cart
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (product) => {
    if (!cartProducts.includes(product))
      setCartProducts([...cartProducts, product]);
    openCart();
    closeDetails();
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

  // Discount
  const [discount, setDiscount] = useState(0);

  return (
    <AppContext.Provider
      value={{
        products,
        productsLoading,
        productToShow,
        showProduct,
        isDetailsOpen,
        closeDetails,
        isCartOpen,
        closeCart,
        toggleCart,
        cartProducts,
        addProductToCart,
        removeProductFromCart,
        discount,
        setDiscount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
