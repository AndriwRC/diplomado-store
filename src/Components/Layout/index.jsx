import NavBar from '../Navbar';
import Cart from '../Cart';
import ProductDetails from '../ProductDetails';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Cart />
      <ProductDetails />
      <main className='mt-16 flex flex-col items-center'>{children}</main>
    </>
  );
};

export default Layout;
