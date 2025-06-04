import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export const ChartPage = () => {
  const { metal } = useParams(); // Получаем параметр из URL

  const metalNames = {
    gold: 'Золото',
    silver: 'Серебро',
    palladium: 'Палладий',
    platinum: 'Платина'
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 2,
        color: 'white'
      }}>
      <Typography variant='h4' gutterBottom>
        График для {metalNames[metal] || 'металла'}
      </Typography>
      <Box
        sx={{
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: 2
        }}>
        <Typography>Здесь будет график {metalNames[metal] || ''}</Typography>
      </Box>
    </Box>
  );
};

export default ChartPage;
