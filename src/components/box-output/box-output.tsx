import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  Input,
  Paper,
  Box,
  SelectChangeEvent,
} from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface BoxOutputProps {
  title: string;
  currentCurrentcy: string;
  onChange: (evt: SelectChangeEvent) => void;
}

function BoxOutput({
  title,
  currentCurrentcy,
  onChange,
}: BoxOutputProps): JSX.Element {
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

  const arr = ['USD', 'RUB', 'JYS', 'QWE', 'AUS', 'ASD', 'ZXC', 'DSA'];

  return (
    <Box sx={{ width: '350px' }}>
      <Typography color='#5C5C5C' fontSize={16} mb={1}>
        {title}
      </Typography>
      <Paper>
        <FormControl sx={{ width: '100%', mb: 5 }}>
          <Select
            multiline
            value={currentCurrentcy}
            onChange={onChange}
            MenuProps={menuProps}
            sx={{
              '& .MuiSelect-icon': { transform: 'rotate(90deg)' },
              '& .MuiSelect-iconOpen': { transform: 'rotate(270deg)' },
            }}
            IconComponent={ArrowForwardIosIcon}>
            {arr.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Input
          id='text-helper'
          type='number'
          disableUnderline
          placeholder='Введите сумму'
          sx={{
            fontSize: '32px',
            fontWeight: 500,
            height: '100%',
            width: '100%',
            mb: 5,
            pl: 3,
            pr: 3,
            border: 'none',
            '& .MuiInput-input::-webkit-outer-spin-button, & .MuiInput-input::-webkit-inner-spin-button':
              {
                '-webkit-appearance': 'none',
                display: 'none',
                '-moz-appearance': 'textfield',
              },
          }}
        />
        <Box>
          <Typography color='#B4B4B4' p={2}>
            n RUB = n USD
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default BoxOutput;
