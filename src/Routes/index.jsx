import { useContext } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { AppContext } from '../Context';
import Admin from '../Pages/Admin';
import Home from '../Pages/Home';
import Store from '../Pages/Store';
import NotFound from '../Pages/NotFound';
import SignIn from '../Pages/SignIn';

const Routes = () => {
  const { isAdmin } = useContext(AppContext);

  return useRoutes([
    { path: '/', element: <Home /> },
    {
      path: '/admin',
      element: !isAdmin ? <Navigate replace to={'/sign-in'} /> : <Admin />,
    },
    {
      path: '/store',
      element: <Store />,
    },
    {
      path: '/store/:category',
      element: <Store />,
    },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);
};

export default Routes;
