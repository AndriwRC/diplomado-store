import NavBar from '../Components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className='mt-16 flex flex-col items-center'>{children}</main>
    </>
  );
};

export default Layout;
