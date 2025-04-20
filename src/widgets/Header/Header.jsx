import Button from '@mui/material/Button';
import { AppBar, Toolbar } from '@mui/material';
import BB from '/public/assets/BB.png';
import { ImageStyles, MainButtonStyles, MetallsButtonStyles } from '../Button/styles.js';
import { getAppBarStyles } from './AppBarStyle.js';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '/src/i18n/LangSwitcher.jsx';

export const Header = ({ setSelectedMetal, onHomeClick }) => {
  const { t } = useTranslation();
  return (
    <AppBar sx={getAppBarStyles}>
      <Toolbar>
        <Box component='img' sx={ImageStyles} src={BB} alt='Логотип'></Box>
        <Button color='inherit' sx={MainButtonStyles} onClick={onHomeClick}>
          {t('header.home')}
        </Button>
        <Button color='inherit' sx={MetallsButtonStyles} onClick={() => setSelectedMetal('Все')}>
          {t('header.metals')}
        </Button>
        <Button color='inherit' sx={MetallsButtonStyles} onClick={() => setSelectedMetal('Золото')}>
          {t('header.gold')}
        </Button>
        <Button color='inherit' sx={MetallsButtonStyles} onClick={() => setSelectedMetal('Серебро')}>
          {t('header.silver')}
        </Button>
        <Button color='inherit' sx={MetallsButtonStyles} onClick={() => setSelectedMetal('Платина')}>
          {t('header.platinum')}
        </Button>
        <Button color='inherit' sx={MetallsButtonStyles} onClick={() => setSelectedMetal('Палладий')}>
          {t('header.palladium')}
        </Button>
        <LanguageSwitcher />
      </Toolbar>
    </AppBar>
  );
};
