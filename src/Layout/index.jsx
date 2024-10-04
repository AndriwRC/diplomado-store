import NavBar from '../Components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className='mt-16'>{children}</main>
    </>
  );
};

export default Layout;
