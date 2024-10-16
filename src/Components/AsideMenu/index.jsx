import { HiX } from 'react-icons/hi';
import './styles.css';

const AsideMenu = ({ isOpen, title, closeMenu, children }) => {
  return (
    <aside
      className={` ${
        isOpen ? 'flex' : 'hidden'
      } aside-menu flex flex-col fixed top-16 right-0 z-10 w-full max-w-sm border border-black rounded-lg bg-white aside-menu`}
    >
      <div className='flex justify-between p-6'>
        <h2 className='font-medium text-xl'>{title}</h2>
        <span>
          <HiX
            className='h-6 w-6 text-black cursor-pointer'
            onClick={closeMenu}
          />
        </span>
      </div>
      {children}
    </aside>
  );
};

export default AsideMenu;
