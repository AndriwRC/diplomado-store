import { createContext, useEffect, useState } from 'react';
import { useAsideMenu } from '../Hooks/useAsideMenu';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // API requests base config
  const api = axios.create({
    baseURL: 'https://storeu-api-diplomado.vercel.app/api',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Products
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get('/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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

  // User Auth
  const [signOut, setSignOut] = useState(true);
  const [account, setAccount] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(account?.rol === 'Administrador');
  }, [account]);

  // Notifications
  const {
    isOpen: isModalOpen,
    openMenu: openModal,
    closeMenu: closeModal,
  } = useAsideMenu(false);

  return (
    <AppContext.Provider
      value={{
        api,
        loading,
        setLoading,
        error,
        setError,
        products,
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
        signOut,
        setSignOut,
        account,
        setAccount,
        isAdmin,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
