import { Box, CircularProgress, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import ChartsSidebar from '../widgets/Graphics/graphic';
import { useState, useEffect } from 'react';
import MetalPriceChart from '/src/widgets/Graphics/MetalPriceChart.jsx';

const ChartsLayout = () => {
  const { metal } = useParams();
  const [metalData, setMetalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://10.13.76.55:8000/api/metals/');
        if (!response.ok) throw new Error('Ошибка загрузки данных');
        const metals = await response.json();

        const metalMapping = {
          gold: 'XAU',
          silver: 'XAG',
          platinum: 'XPT',
          palladium: 'XPD'
        };

        const selectedMetal = metals.find(m => m.symbol === metalMapping[metal?.toLowerCase()] || m.name.toLowerCase().includes(metal?.toLowerCase()));

        if (selectedMetal) {
          setMetalData({
            name: selectedMetal.name,
            symbol: selectedMetal.symbol,
            prices: {
              today: parseFloat(selectedMetal.price_today),
              weekAgo: parseFloat(selectedMetal.price_week_ago),
              monthAgo: parseFloat(selectedMetal.price_month_days_ago)
            },
            updatedAt: selectedMetal.updated_at
          });
        } else {
          throw new Error(`Металл "${metal}" не найден. Доступные варианты: gold, silver, platinum, palladium`);
        }
      } catch (err) {
        setError(err.message);
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    if (metal) fetchData();
  }, [metal]);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '700px',
        width: '500',
        marginLeft: '15px',
        marginTop: '10px',
        overflow: 'hidden'
      }}>
      <ChartsSidebar />

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(8px)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          p: 3,
          // Размеры контейнера
          maxWidth: '1100px',
          maxHeight: '2000px', // Значительно увеличено для размещения высокого графика
          mt: '80px',
          ml: '400px',
          overflowX: 'hidden',
          overflowY: 'auto'
        }}>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color='error' variant='h6'>
            {error}
          </Typography>
        ) : metalData ? (
          <MetalPriceChart
            metalData={metalData}
            // Финальные размеры графика
            chartStyle={{
              width: '100%',
              maxWidth: '100%',
              height: '1687.5px', // 1125px * 1.5
              margin: '0 auto'
            }}
          />
        ) : (
          <Typography variant='h6'>Выберите металл из списка</Typography>
        )}
      </Box>
    </Box>
  );
};

export default ChartsLayout;
