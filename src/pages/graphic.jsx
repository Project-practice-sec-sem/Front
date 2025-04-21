import { Box } from '@mui/material';
import { graphicStyle } from './graphicStyle.js';

export const ChartPage = ({ metalData }) => {
  return (
    <Box sx={graphicStyle}>
      <h2>График для {metalData?.metal}</h2>
      {/* Здесь будет ваш график */}
    </Box>
  );
};
