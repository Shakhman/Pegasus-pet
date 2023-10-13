import flattenDeep from 'lodash/flattenDeep';
import { Route, Routes as ReactRoutes, Outlet } from 'react-router-dom';

import { RouteData, ChildRoute } from './routes';

const generateFlattenRoutes = (routes: ChildRoute[]): ChildRoute[] => {
  if (!routes) return [];

  return flattenDeep(
    routes.map(({ routes: subRoutes = [], ...rest }) => [rest, generateFlattenRoutes(subRoutes)])
  );
};

type RoutesProps = {
  isAuthorized: boolean,
}

export const renderRoutes = (mainRoutes: RouteData[]) => {
  const Routes = ({ isAuthorized }: RoutesProps) => {
    const filteredRoutes = mainRoutes.filter(route => route.isAuth === isAuthorized);

    const layouts = filteredRoutes.map(({ layout: Layout, routes }, index) => {
      const subRoutes = generateFlattenRoutes(routes);

      return (
        <Route key={index} element={<Layout />}>
          <Route element={<Outlet />}>
            {subRoutes.map(({ component: Component, path, name }) => {
              return (
                Component && path && (<Route key={name} element={<Component />} path={path} />)
              );
            })}
          </Route>
        </Route>
      );
    });

    return <ReactRoutes>{layouts}</ReactRoutes>;
  };

  return Routes;
};