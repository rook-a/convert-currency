import { useState } from 'react';
import {
  Button,
  Container,
  SelectChangeEvent,
  Typography,
  Icon,
} from '@mui/material';

import BoxOutput from '../box-output/box-output';

function App() {
  const [currency, setCurrency] = useState('USD');

  const arrowsIcon = (
    <Icon>
      <img src='arrows.svg' alt='arrows icon' />
    </Icon>
  );

  const handleChange = (evt: SelectChangeEvent<typeof currency>) => {
    const { value } = evt.target;

    setCurrency(value);
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
      <Typography variant='h1' fontSize={36} align='center'>
        Convert currency
      </Typography>

      <Container sx={{ display: 'flex', gap: '70px', alignItems: 'center' }}>
        <BoxOutput
          title={'У меня есть'}
          currentCurrentcy={currency}
          onChange={handleChange}
        />

        <Button
          startIcon={arrowsIcon}
          sx={{
            height: '70px',
            width: '70px',

            '& .MuiButton-startIcon, & .material-icons': {
              display: 'block',
              width: '68px',
              height: '56px',
              m: 0,
            },
          }}
        />

        <BoxOutput
          title={'Я получу'}
          currentCurrentcy={currency}
          onChange={handleChange}
        />
      </Container>
    </Container>
  );
}

export default App;
