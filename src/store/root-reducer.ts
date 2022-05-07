import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../utils/const';
import { currencySlice } from './currency-slice/currency-slice';

export const rootReducer = combineReducers({
  [NameSpace.Currency]: currencySlice.reducer,
});
