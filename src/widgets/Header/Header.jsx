import Button from '@mui/material/Button';
import { AppBar, Toolbar } from '@mui/material';
import BB from '/public/assets/BB.png';
import { ImageStyles, MainButtonStyles, MetallsButtonStyles } from '../Button/styles.js';
import { getAppBarStyles } from './AppBarStyle.js';
import Box from '@mui/material/Box';

export const Header = ({ setSelectedMetal, onHomeClick }) => {
  return (
    <AppBar sx={getAppBarStyles}>
      <Toolbar>
        <Box component='img' sx={ImageStyles} src={BB} alt='Логотип'></Box>

        <Button color='inherit' sx={MainButtonStyles} onClick={onHomeClick}>
          Главная
        </Button>
        <Button color='inherit' sx={MetallsButtonStyles} onClick={() => setSelectedMetal('Все')}>
          Металлы
        </Button>
        <Button color='inherit' sx={MetallsButtonStyles} onClick={() => setSelectedMetal('Золото')}>
          Золото
        </Button>

        <Button color='inherit' sx={MetallsButtonStyles} onClick={() => setSelectedMetal('Серебро')}>
          Серебро
        </Button>
        <Button color='inherit' sx={MetallsButtonStyles} onClick={() => setSelectedMetal('Платина')}>
          Платина
        </Button>
        <Button color='inherit' sx={MetallsButtonStyles} onClick={() => setSelectedMetal('Палладий')}>
          Палладий
        </Button>
      </Toolbar>
    </AppBar>
  );
};
