import NavBar from '../Navbar';
import Cart from '../Cart';
import ProductDetails from '../ProductDetails';
import Modal from '../Modal';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Cart />
      <ProductDetails />
      <Modal />
      <main className='mt-16 flex flex-col items-center'>{children}</main>
    </>
  );
};

export default Layout;
