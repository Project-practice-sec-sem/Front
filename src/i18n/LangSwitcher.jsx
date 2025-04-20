import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Button onClick={() => changeLanguage('ru')} color='inherit' sx={{ ml: '350px' }}>
        RU
      </Button>
      <Button onClick={() => changeLanguage('en')} color='inherit'>
        EN
      </Button>
    </div>
  );
};
