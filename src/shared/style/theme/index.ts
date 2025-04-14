import { createTheme } from '@mui/material/styles';
import { components } from './components';
import { palette } from './palette';
import { shape } from './shape';
import { typography } from './typography';

export const theme = createTheme({
  components,
  palette,
  shape,
  typography
});
