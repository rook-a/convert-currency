import { Button, Icon } from '@mui/material';

const arrowsIcon = (
  <Icon>
    <img src="arrows.svg" width={68} height={56} alt="arrows-icon" />
  </Icon>
);

function ChangeButton() {
  return (
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
  );
}

export default ChangeButton;
