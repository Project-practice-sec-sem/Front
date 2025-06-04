import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';

const MetalPriceChart = ({ metalData }) => {
  // Подготовка данных для графика
  const chartData = [
    {
      period: 'Месяц назад',
      price: metalData.prices.monthAgo,
      date: new Date(new Date(metalData.updatedAt).setDate(new Date(metalData.updatedAt).getDate() - 30)).toLocaleDateString('ru-RU')
    },
    {
      period: 'Неделю назад',
      price: metalData.prices.weekAgo,
      date: new Date(new Date(metalData.updatedAt).setDate(new Date(metalData.updatedAt).getDate() - 7)).toLocaleDateString('ru-RU')
    },
    {
      period: 'Сегодня',
      price: metalData.prices.today,
      date: new Date(metalData.updatedAt).toLocaleDateString('ru-RU')
    }
  ];

  return (
    <Box sx={{ width: '100%', height: '500px', ...chartStyle, maxWidth: '100%' }}>
      <Typography variant='h5' gutterBottom textAlign='center'>
        {metalData.name} ({metalData.symbol})
      </Typography>
      <Typography variant='subtitle1' textAlign='center' color='text.secondary' gutterBottom>
        Последнее обновление: {new Date(metalData.updatedAt).toLocaleString('ru-RU')}
      </Typography>

      <ResponsiveContainer width='100%' height='80%'>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' stroke='rgba(255, 255, 255, 0.1)' />
          <XAxis dataKey='period' stroke='rgba(255, 255, 255, 0.7)' tick={{ fill: 'rgba(255, 255, 255, 0.7)' }} />
          <YAxis stroke='rgba(255, 255, 255, 0.7)' tick={{ fill: 'rgba(255, 255, 255, 0.7)' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '4px'
            }}
            formatter={value => [`${value} USD`, 'Цена']}
            labelFormatter={label => {
              const item = chartData.find(d => d.period === label);
              return `Дата: ${item?.date || label}`;
            }}
          />
          <Line type='monotone' dataKey='price' stroke='#8884d8' strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default MetalPriceChart;
