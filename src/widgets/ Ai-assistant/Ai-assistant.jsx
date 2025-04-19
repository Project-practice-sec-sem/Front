import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const NotificationBox = styled(Box)({
  position: 'fixed',
  left: 20,
  top: 80,
  width: '300px',
  height: '550px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(8px)',
  overflow: 'hidden',
  zIndex: 1200,
  boxShadow: 'none',
  border: 'none'
});

const ScrollableTable = styled(TableContainer)({
  flex: 1,
  overflowY: 'auto',
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

export const AiAssistant = () => {
  const notifications = [
    { id: 1, message: 'Золото выросло на 1.2%', time: '10:30' },
    { id: 2, message: 'Серебро упало на 0.8%', time: '09:45' },
    { id: 3, message: 'Платина стабилизировалась', time: '08:15' },
    { id: 4, message: 'Новый рекорд по палладию', time: '07:30' },
    { id: 5, message: 'Изменение котировок Rh', time: '06:20' },
    { id: 6, message: 'Анализ рынка завершен', time: '05:10' },
    { id: 7, message: 'Анализ рынка завершен', time: '05:10' },
    { id: 8, message: 'Анализ рынка завершен', time: '05:10' },
    { id: 9, message: 'Анализ рынка завершен', time: '05:10' },
    { id: 10, message: 'Анализ рынка завершен', time: '05:10' },
    { id: 11, message: 'Анализ рынка завершен', time: '05:10' }
  ];

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
        ИИ Ассистент
      </Typography>

      <ScrollableTable>
        <Table size='small' sx={{ tableLayout: 'fixed' }}>
          <TableBody>
            {notifications.map(notification => (
              <TableRow
                key={notification.id}
                hover
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)'
                  }
                }}>
                <TableCell
                  sx={{
                    color: 'white',
                    fontSize: '0.8rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    py: 1.5,
                    px: 2
                  }}>
                  <div>{notification.message}</div>
                  <div
                    style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '0.7rem',
                      marginTop: '4px'
                    }}>
                    {notification.time}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollableTable>
    </NotificationBox>
  );
};
