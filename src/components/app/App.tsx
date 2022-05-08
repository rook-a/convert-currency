import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Spinner from '../spinner/spinner';

import { AppRoute } from '../../utils/const';

const ConvertCurrency = lazy(() => import('../convert-currency/convert-currency'));

function App(): JSX.Element {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route index element={<ConvertCurrency />} />
        <Route path={AppRoute.NotFound} element={<Navigate to={AppRoute.Main} replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
