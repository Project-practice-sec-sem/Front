import React, { useState, useEffect } from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Button from '@mui/material/Button';
import { seeButton } from '../Button/styles.js';

export const MetalsTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    { id: 'abb', label: 'Аббревиатура', width: 120 },
    { id: 'currency', label: 'Валюта', width: 180 },
    { id: 'price', label: 'Цена/грамм', width: 150 },
    { id: 'change', label: 'Изменение (24ч)', width: 150 },
    { id: 'graphic', label: 'График', width: 150 }
  ];

  useEffect(() => {
    // Эмуляция загрузки данных из БД
    const fetchData = async () => {
      try {
        // Здесь должен быть реальный запрос к вашему API
        // const response = await fetch('/api/metals');
        // const result = await response.json();

        // Временная заглушка с имитацией задержки
        await new Promise(resolve => setTimeout(resolve, 500));

        const mockData = [
          { abb: 'XAU', currency: 'Золото (Gold)', price: '5,832 ₽', change: '+1.2%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' },
          { abb: 'XAG', currency: 'Серебро (Silver)', price: '72.5 ₽', change: '-0.8%' }
          // ... остальные данные
        ];

        setData(mockData);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        right: 80,
        top: 64,
        width: '75%',
        p: 2,
        boxSizing: 'border-box'
      }}>
      <Paper
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'none',
          background: 'rgba(0, 0, 0, 0.4)'
        }}>
        <TableContainer>
          <Table stickyHeader size='medium' sx={{ tableLayout: 'fixed' }}>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align='center'
                    sx={{
                      width: column.width,
                      fontWeight: 'bold',
                      background: 'rgba(0, 0, 0, 0.5)',
                      color: 'white',
                      fontSize: '0.9rem',
                      // borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: 'none'
                    }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} align='center' sx={{ py: 3 }}>
                    Загрузка данных...
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row, index) => (
                  <TableRow hover key={`row-${index}`}>
                    <TableCell align='center' sx={{ color: 'white' }}>
                      {row.abb}
                    </TableCell>
                    <TableCell align='center' sx={{ color: 'white' }}>
                      {row.currency}
                    </TableCell>
                    <TableCell align='center' sx={{ color: 'white' }}>
                      {row.price}
                    </TableCell>
                    <TableCell
                      align='center'
                      sx={{
                        color: row.change.startsWith('+') ? '#4caf50' : '#f44336',
                        fontWeight: 500
                      }}>
                      {row.change}
                    </TableCell>
                    <TableCell align='center' sx={{ color: 'white', fontSize: '1.2rem' }}>
                      <Button color='inherit' sx={seeButton}>
                        Посмотреть
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default MetalsTable;
