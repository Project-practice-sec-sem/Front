import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'ru');

  const changeLanguage = () => {
    const newLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <Tooltip title={currentLanguage === 'ru' ? 'Switch to English' : 'Переключить на русский'}>
      <IconButton
        onClick={changeLanguage}
        color='inherit'
        sx={{
          ml: '400px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
          }
        }}>
        <LanguageIcon />
        <span
          style={{
            marginLeft: '8px',
            fontSize: '0.875rem',
            textTransform: 'uppercase'
          }}>
          {currentLanguage}
        </span>
      </IconButton>
    </Tooltip>
  );
};
