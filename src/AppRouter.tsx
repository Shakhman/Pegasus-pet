import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from '@/routes/generateFlattenRoutes';
import { routes } from '@/routes/routes';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

const Routes = renderRoutes(routes);

export default function AppRouter() {
  const { isAuth } = useContext(AuthContext);



  return (
    <BrowserRouter>
      <Routes isAuthorized={typeof isAuth === 'boolean' ? isAuth : true} />
    </BrowserRouter>
  );
}
