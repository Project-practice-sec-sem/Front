import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { AppBar, Toolbar } from '@mui/material';
import BB from '/public/assets/BB.png';
import { ImageStyles, MainButtonStyles, MetallsButtonStyles } from '../Button/styles.js';
import { MOUSE_STYLE } from './MouseStyle.js';
import { getAppBarStyles } from './AppBarStyle.js';
import Box from '@mui/material/Box';

export const Header = () => {
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const HOVER_AREA_HEIGHT = 50;

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY < 10;
      setIsAtTop(atTop);
      if (atTop) {
        setVisible(true);
      } else if (!isHovered) {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isAtTop) {
      setVisible(false);
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ ...MOUSE_STYLE, height: `${HOVER_AREA_HEIGHT}px` }}>
      <AppBar sx={getAppBarStyles(visible)}>
        <Toolbar>
          <Box component='img' sx={ImageStyles} src={BB} alt='Логотип'></Box>

          <Button color='inherit' sx={MainButtonStyles}>
            Главная
          </Button>
          <Button color='inherit' sx={MetallsButtonStyles}>
            Золото
          </Button>

          <Button color='inherit' sx={MetallsButtonStyles}>
            Серебро
          </Button>
          <Button color='inherit' sx={MetallsButtonStyles}>
            Платина
          </Button>
          <Button color='inherit' sx={MetallsButtonStyles}>
            Палладий
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
