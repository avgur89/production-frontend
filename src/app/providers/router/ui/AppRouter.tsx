import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { getUserAuthData } from 'entities/User';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  // eslint-disable-next-line max-len
  const routes = useMemo(() => Object.values(routeConfig).filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  );
};

export default memo(AppRouter);
