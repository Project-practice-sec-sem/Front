import { useState, useEffect } from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Button from '@mui/material/Button';
import { seeButton } from '../Button/styles.js';
import { BoxStyle, PaperStyle, tableCellStyles } from './TableStyles.js';
import { useTranslation } from 'react-i18next';
import mockData from '/src/widgets/table/mockData.json';

export const MetalsTable = ({ selectedMetal = 'Все', onViewClick }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const { t } = useTranslation();

  const columns = [
    { id: 'metal', label: t('table.metal'), width: 150 },
    { id: 'currencyAbb', label: t('table.currency'), width: 80 },
    { id: 'currencyName', label: t('table.currencyName'), width: 180 },
    { id: 'price', label: t('table.price'), width: 150 },
    { id: 'change', label: t('table.change'), width: 150 },
    { id: 'graphic', label: t('table.chart'), width: 150 }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));

        setData(mockData);
        setFilteredData(mockData);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
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
          <Table stickyHeader size='medium' sx={{ tableLayout: 'fixed' }}>
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
                    <TableCell align='center' sx={{ ...tableCellStyles.body, fontSize: '1.2rem' }}>
                      <Button color='inherit' sx={seeButton} onClick={() => onViewClick(row)}>
                        {t('table.view')}
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
