import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Markdown from 'react-markdown';

const NotificationBox = styled(Box)({
  position: 'fixed',
  left: 20,
  top: 80,
  width: '300px',
  height: '800px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(8px)',
  overflow: 'hidden',
  zIndex: 1200,
  boxShadow: 'none',
  border: 'none'
});

const ScrollableContent = styled(Box)({
  flex: 1,
  overflowY: 'auto',
  padding: '16px',
  '&::-webkit-scrollbar': {
    width: '6px'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: '3px'
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent'
  }
});

const AdvicePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  color: 'white',
  '& h2, & h3, & h4': {
    color: 'white',
    marginTop: '0.5em',
    marginBottom: '0.5em'
  },
  '& ul, & ol': {
    paddingLeft: '1.5em'
  },
  '& li': {
    marginBottom: '0.5em'
  },
  '& strong': {
    color: theme.palette.primary.light
  }
}));

export const AiAssistant = () => {
  const { t } = useTranslation();
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await fetch('http://10.13.76.55:8000/ai-advice/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAdvice(data.advice);
      } catch (err) {
        console.error('Error fetching advice:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvice();

    // Опционально: обновляем данные каждые X секунд
    const intervalId = setInterval(fetchAdvice, 1800000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <NotificationBox component='section'>
      <Typography
        variant='subtitle2'
        sx={{
          p: 1.5,
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
        {t('aiAssist.title')}
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <CircularProgress color='inherit' size={24} />
        </Box>
      ) : error ? (
        <Alert severity='error' sx={{ margin: 2 }}>
          Failed to load data: {error}
        </Alert>
      ) : (
        <ScrollableContent>
          <AdvicePaper elevation={0}>
            <Markdown>{advice}</Markdown>
          </AdvicePaper>
        </ScrollableContent>
      )}
    </NotificationBox>
  );
};
