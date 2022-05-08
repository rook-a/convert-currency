import { ChangeEvent, useEffect, useState } from 'react';
import { Container, SelectChangeEvent, Typography } from '@mui/material';

import OutputDataFrom from '../output-data-from/output-data-from';
import OutputDataTo from '../output-data-to/output-data-to';
import ChangeButton from '../change-button/change-button';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchCurrency, fetchSymbols, selectCurrencyRates } from '../../store/currency-slice/currency-slice';
import { InitialState } from '../../types/initial-state';

function ConvertCurrency() {
  const dispatch = useAppDispatch();
  const selectRates = useAppSelector(selectCurrencyRates);
  const [convertValue, setConvertValue] = useState<InitialState>({
    fromCurrency: 'USD',
    fromAmount: '',
    toCurrency: 'RUB',
    toAmount: '',
  });

  useEffect(() => {
    dispatch(fetchCurrency({ base: 'USD' }));
    dispatch(fetchSymbols());
  }, [dispatch]);

  const handleSelectFromCurrencyChange = (evt: SelectChangeEvent) => {
    const { value } = evt.target;

    setConvertValue((prevState) => ({
      ...prevState,
      fromCurrency: value,
    }));

    dispatch(fetchCurrency({ base: value }));
  };

  const handleSelectToCurrencyChange = (evt: SelectChangeEvent) => {
    const { value } = evt.target;

    setConvertValue((prevState) => ({
      ...prevState,
      toCurrency: value,
    }));

    dispatch(fetchCurrency({ base: value }));
  };

  const handleInputFromCurrencyChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    setConvertValue((prevState) => ({
      ...prevState,
      fromAmount: Number(value),
      toAmount: Number(value) * Number(selectRates[convertValue.toCurrency]),
    }));
  };

  const handleInputToCurrencyChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    setConvertValue((prevState) => ({
      ...prevState,
      toAmount: Number(value),
      fromAmount: Number(value) / Number(selectRates[convertValue.toCurrency]),
    }));
  };

  return (
    <Container
      sx={{
        display: 'grid',
        gridTemplateRows: 'min-content 1fr',
        justifyContent: 'center',
        alignItems: 'center',
        p: 20,
        height: '100vh',
      }}>
      <Typography variant="h1" fontSize={36} align="center">
        Convert currency
      </Typography>

      <Container sx={{ display: 'flex', gap: '70px', alignItems: 'center' }}>
        <OutputDataFrom
          currentCurrentcy={convertValue}
          onSelectFromCurrencyChange={handleSelectFromCurrencyChange}
          onInputFromCurrencyChange={handleInputFromCurrencyChange}
          amount={convertValue.fromAmount}
        />

        <ChangeButton />

        <OutputDataTo
          currentCurrentcy={convertValue}
          onSelectToCurrencyChange={handleSelectToCurrencyChange}
          onInputToCurrencyChange={handleInputToCurrencyChange}
          amount={convertValue.toAmount}
        />
      </Container>
    </Container>
  );
}

export default ConvertCurrency;
