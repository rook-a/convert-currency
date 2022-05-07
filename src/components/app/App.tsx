import { Routes, Route, Navigate } from 'react-router-dom';
import ConvertCurrency from '../convert-currency/convert-currency';
import { AppRoute } from '../../utils/const';

function App(): JSX.Element {
  return (
    <Routes>
      <Route index element={<ConvertCurrency />} />
      <Route path={AppRoute.NotFound} element={<Navigate to={AppRoute.Main} replace />} />
    </Routes>
  );
}

export default App;
