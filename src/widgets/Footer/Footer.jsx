import { Box, Container, Link, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: theme => (theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'),
        p: 3,
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid',
        borderColor: theme => (theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'),
        width: '100%'
      }}>
      <Container maxWidth='sm'>
        <Typography variant='body2' color='text.secondary' align='center'>
          {'Copyright © '}
          <Link color='inherit' href='#'>
            Metallica Analytics
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};
