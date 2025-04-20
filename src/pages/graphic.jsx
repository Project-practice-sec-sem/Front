import { Box } from '@mui/material';

export const ChartPage = ({ metalData }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        right: 80,
        top: 64,
        width: '75%',
        p: 2,
        boxSizing: 'border-box',
        color: 'white'
      }}>
      <h2>График для {metalData?.metal}</h2>
      {/* Здесь будет ваш график */}
    </Box>
  );
};
