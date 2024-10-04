import NavBar from '../Navbar';
import Cart from '../Cart';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Cart />
      <main className='mt-16 flex flex-col items-center'>{children}</main>
    </>
  );
};

export default Layout;
