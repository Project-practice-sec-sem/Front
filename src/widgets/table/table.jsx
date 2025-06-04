import { useState, useEffect } from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { BoxStyle, PaperStyle, tableCellStyles } from './TableStyles.js';
import { useTranslation } from 'react-i18next';

export const MetalsTable = ({ selectedMetal = 'Все', onViewClick }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const { t } = useTranslation();

  const columns = [
    { id: 'metal', label: t('table.metal'), width: 40 },
    { id: 'currencyAbb', label: t('table.currency'), width: 30 },
    { id: 'currencyName', label: t('table.currencyName'), width: 70 },
    { id: 'price', label: t('table.price'), width: 20 },
    { id: 'change', label: t('table.change'), width: 20 }
  ];

  const formatPrice = price => {
    if (!price) return '0.00';
    const num = parseFloat(price);
    if (isNaN(num)) return price;
    return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '');
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://10.13.76.55:8000/api/metals/');
        if (!response.ok) throw new Error('Ошибка загрузки данных');
        const metals = await response.json();

        const tableRows = [];
        for (const metal of metals) {
          const metalName = metal.name;
          const converted = metal.converted_prices;

          for (const [currencyAbb, prices] of Object.entries(converted)) {
            const priceToday = parseFloat(prices.today);
            const priceWeekAgo = parseFloat(prices.week_ago);
            let change = '0%';

            if (priceWeekAgo && priceWeekAgo !== 0) {
              const diff = ((priceToday - priceWeekAgo) / priceWeekAgo) * 100;
              change = `${diff >= 0 ? '+' : ''}${diff.toFixed(1)}%`;
            }

            tableRows.push({
              metal: metalName,
              currencyAbb,
              currencyName: prices.currency_name,
              price: formatPrice(prices.today),
              change
            });
          }
        }

        setData(tableRows);
        setFilteredData(tableRows);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
        setData([]);
        setFilteredData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedMetal === 'Все') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(item => item.metal === selectedMetal));
    }
  }, [selectedMetal, data]);

  return (
    <Box sx={BoxStyle}>
      <Paper sx={PaperStyle}>
        <TableContainer>
          <Table stickyHeader size='medium' sx={{ tableLayout: 'fixed', width: 1100 }}>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align='center'
                    sx={{
                      ...tableCellStyles.header,
                      width: column.width
                    }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={columns.length} align='center' sx={{ py: 3, ...tableCellStyles.body }}>
                    {t('table.loading')}
                  </TableCell>
                </TableRow>
              ) : filteredData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length} align='center' sx={{ py: 3, ...tableCellStyles.body }}>
                    {t('table.noData')}
                  </TableCell>
                </TableRow>
              ) : (
                filteredData.map((row, index) => (
                  <TableRow hover key={`row-${index}`}>
                    <TableCell align='center' sx={tableCellStyles.body}>
                      {row.metal}
                    </TableCell>
                    <TableCell align='center' sx={{ ...tableCellStyles.body, fontWeight: 'bold' }}>
                      {row.currencyAbb}
                    </TableCell>
                    <TableCell align='center' sx={tableCellStyles.body}>
                      {row.currencyName}
                    </TableCell>
                    <TableCell align='center' sx={tableCellStyles.body}>
                      {row.price}
                    </TableCell>
                    <TableCell
                      align='center'
                      sx={{
                        ...tableCellStyles.body,
                        color: row.change.startsWith('+') ? '#4caf50' : '#f44336',
                        fontWeight: 500
                      }}>
                      {row.change}
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
