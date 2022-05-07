import { ChangeEvent } from 'react';
import { FormControl, MenuItem, Select, Typography, Input, Paper, Box, SelectChangeEvent } from '@mui/material';

import { useAppSelector } from '../../hooks/hooks';
import { selectCurrencySymbols } from '../../store/currency-slice/currency-slice';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { InitialState } from '../../types/initial-state';

interface BoxOutputProps {
  currentCurrentcy: InitialState;
  onSelectToCurrencyChange: (evt: SelectChangeEvent) => void;
  onInputToCurrencyChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  amount: number;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const menuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function OutputDataTo({
  currentCurrentcy,
  onSelectToCurrencyChange,
  onInputToCurrencyChange,
  amount,
}: BoxOutputProps): JSX.Element {
  const selectSymbols = useAppSelector(selectCurrencySymbols);

  return (
    <Box sx={{ width: '350px' }}>
      <Typography color="#5C5C5C" fontSize={16} mb={1}>
        Я получу
      </Typography>
      <Paper>
        <FormControl sx={{ width: '100%', mb: 5 }}>
          <Select
            value={currentCurrentcy.toCurrency || ''}
            onChange={onSelectToCurrencyChange}
            MenuProps={menuProps}
            sx={{
              '& .MuiSelect-icon': { transform: 'rotate(90deg)' },
              '& .MuiSelect-iconOpen': { transform: 'rotate(270deg)' },
            }}
            IconComponent={ArrowForwardIosIcon}>
            {Object.entries(selectSymbols).map(([name, fullName]) => (
              <MenuItem key={name} value={name}>
                {name} {fullName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Input
          onChange={onInputToCurrencyChange}
          value={amount || ''}
          id="amount-to"
          name="amount-to"
          type="number"
          disableUnderline
          placeholder="Введите сумму"
          sx={{
            fontSize: '32px',
            fontWeight: 500,
            height: '100%',
            width: '100%',
            mb: 5,
            pl: 3,
            pr: 3,
            border: 'none',
            '& .MuiInput-input::-webkit-outer-spin-button, & .MuiInput-input::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
              display: 'none',
              MozAppearance: 'textfield',
            },
          }}
        />

        <Box>
          <Typography color="#B4B4B4" p={2}>
            {currentCurrentcy.fromAmount} {currentCurrentcy.fromCurrency} = {currentCurrentcy.toAmount}{' '}
            {currentCurrentcy.toCurrency}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default OutputDataTo;
