import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Currency, Rates, SendCurrency } from '../../types/currency';
import { AppDispatch, State } from '../../types/state';
import { Symbols } from '../../types/symbols';
import { APIRoute, FetchStatus, NameSpace } from '../../utils/const';

const API_KEY = process.env.REACT_APP_CURRENCY_API_KEY!;

const HEADERS = {
  headers: {
    'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
    'X-RapidAPI-Key': API_KEY,
  },
};

interface InitialState {
  currency: Rates;
  currencyStatus: FetchStatus;

  symbols: Symbols | {};
  symbolsStatus: FetchStatus;
}

const initialState: InitialState = {
  currency: {},
  currencyStatus: FetchStatus.Idle,

  symbols: {},
  symbolsStatus: FetchStatus.Idle,
};

export const fetchCurrency = createAsyncThunk<
  Currency,
  SendCurrency,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchCurrency', async ({ base }: SendCurrency, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Currency>(`${APIRoute.Latest}?base=${base}`, HEADERS);

    return data;
  } catch (err) {
    throw err;
  }
});

export const fetchSymbols = createAsyncThunk<
  Symbols,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchSymbols', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Symbols>(APIRoute.Symbols, HEADERS);

    return data;
  } catch (err) {
    throw err;
  }
});

export const currencySlice = createSlice({
  name: NameSpace.Currency,
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(fetchCurrency.pending, (state) => {
        state.currencyStatus = FetchStatus.Pending;
      })
      .addCase(fetchCurrency.fulfilled, (state, action: PayloadAction<Currency>) => {
        state.currency = action.payload.rates;
        state.currencyStatus = FetchStatus.Fulfilled;
      })
      .addCase(fetchCurrency.rejected, (state) => {
        state.currencyStatus = FetchStatus.Rejected;
      })
      .addCase(fetchSymbols.pending, (state) => {
        state.symbolsStatus = FetchStatus.Pending;
      })
      .addCase(fetchSymbols.fulfilled, (state, action: PayloadAction<Symbols>) => {
        state.symbols = action.payload.symbols;
        state.symbolsStatus = FetchStatus.Fulfilled;
      })
      .addCase(fetchSymbols.rejected, (state) => {
        state.symbolsStatus = FetchStatus.Rejected;
      });
  },
});

const selectCurrencyState = (state: State) => state[NameSpace.Currency];

export const selectCurrencyRates = (state: State) => selectCurrencyState(state).currency;
export const selectCurrencySymbols = (state: State) => selectCurrencyState(state).symbols;
