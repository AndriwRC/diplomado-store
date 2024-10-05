import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineUser } from 'react-icons/hi';
import { AppContext } from '../../Context';

const UserMenu = ({ stateClassName, toggleMenu, showMenu }) => {
  const { signOut, setSignOut, account } = useContext(AppContext);

  const display = showMenu ? 'flex' : 'hidden';

  return (
    <ul>
      {!signOut && (
        <>
          <span className='lg:hidden' onClick={() => toggleMenu()}>
            <HiOutlineUser className='h-6 w-6 text-black' />
          </span>
          <div
            className={`${display} absolute top-full right-8 flex-col gap-3 max-w-64 bg-white p-4 rounded-lg border border-black lg:flex lg:items-center lg:relative lg:flex-row lg: lg:max-w-none lg:border-none lg:p-0`}
            onClick={() => toggleMenu()}
          >
            <li className='text-black/60 truncate'>{account?.nombre}</li>
            <li>
              <NavLink
                to='/sign-in'
                className={({ isActive }) => stateClassName(isActive)}
                onClick={() => setSignOut(true)}
              >
                Sign Out
              </NavLink>
            </li>
          </div>
        </>
      )}
      {signOut && (
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => stateClassName(isActive)}
          >
            Sign In
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default UserMenu;
