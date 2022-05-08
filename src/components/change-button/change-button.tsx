import { Dispatch, SetStateAction } from 'react';
import { Button, Icon } from '@mui/material';
import { InitialState } from '../../types/initial-state';

interface ChangeButtonProps {
  currentCurrentcy: InitialState;
  onChangeState: Dispatch<SetStateAction<InitialState>>;
}

const arrowsIcon = (
  <Icon>
    <img src="arrows.svg" width={68} height={56} alt="arrows-icon" />
  </Icon>
);

function ChangeButton({ currentCurrentcy, onChangeState }: ChangeButtonProps): JSX.Element {
  const handleClick = () => {
    onChangeState((prevState) => ({
      ...prevState,
      fromCurrency: currentCurrentcy.toCurrency,
      fromAmount: currentCurrentcy.toAmount,
      toCurrency: currentCurrentcy.fromCurrency,
      toAmount: currentCurrentcy.fromAmount,
    }));
  };

  return (
    <Button
      onClick={handleClick}
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
  );
}

export default ChangeButton;
