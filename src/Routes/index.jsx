import { useRoutes } from 'react-router-dom';
import Admin from '../Pages/Admin';
import Home from '../Pages/Home';
import Store from '../Pages/Store';
import NotFound from '../Pages/NotFound';
import SignIn from '../Pages/SignIn';

const Routes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/admin', element: <Admin /> },
    { path: '/store', element: <Store /> },
    { path: '/store/:category', element: <Store /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);
};

export default Routes;
