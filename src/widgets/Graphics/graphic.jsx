import { Box, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Graph, tableCellStyles } from './graphicStyles.js';

const metals = [
  { name: 'Золото', path: 'gold' },
  { name: 'Серебро', path: 'silver' },
  { name: 'Палладий', path: 'palladium' },
  { name: 'Платина', path: 'platinum' }
];

export const ChartsSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = path => {
    navigate(`/charts/${path}`);
  };

  // Определяем активный металл по текущему пути
  const activeMetal = location.pathname.split('/').pop();

  return (
    <Box sx={Graph}>
      <Typography variant='h6' gutterBottom sx={tableCellStyles.header}>
        Графики
      </Typography>
      <List sx={{ p: 0 }}>
        {metals.map(metal => (
          <ListItemButton
            key={metal.name}
            onClick={() => handleClick(metal.path)}
            selected={activeMetal === metal.path}
            sx={{
              ...tableCellStyles.body,
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              '&.Mui-selected': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }
            }}>
            <ListItemText
              primary={metal.name}
              sx={{
                textAlign: 'center',
                '& .MuiTypography-root': {
                  fontSize: '0.875rem'
                }
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default ChartsSidebar;
