import { NavLink } from 'react-router-dom';

const CategoriesMenu = ({ stateClassName, toggleMenu, showMenu }) => {
  const display = showMenu ? 'flex' : 'hidden';

  return (
    <ul className='grow flex items-center gap-3'>
      <li className='font-semibold text-lg'>
        <NavLink className='md:hidden' onClick={() => toggleMenu()}>
          E-commerce
        </NavLink>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `${stateClassName(isActive)} hidden md:block`
          }
        >
          E-commerce
        </NavLink>
      </li>
      <div
        className={`${display} absolute top-full flex-col gap-3 bg-white p-4 rounded-lg border border-black md:flex md:items-center md:relative md:flex-row md:border-none md:p-0`}
        onClick={() => toggleMenu()}
      >
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `${stateClassName(isActive)} md:hidden`
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/store'
            className={({ isActive }) => stateClassName(isActive)}
          >
            Tienda
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/store/camiseta'
            className={({ isActive }) => stateClassName(isActive)}
          >
            Camisetas
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/store/jean'
            className={({ isActive }) => stateClassName(isActive)}
          >
            Jeans
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/store/zapato'
            className={({ isActive }) => stateClassName(isActive)}
          >
            Zapatos
          </NavLink>
        </li>
      </div>
    </ul>
  );
};

export default CategoriesMenu;
