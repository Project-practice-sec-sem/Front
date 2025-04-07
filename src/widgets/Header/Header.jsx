import logo from '../../../public/assets/logotype.jpg'
import Box from '@mui/material/Box';
import './Header.css'
import Button from '@mui/material/Button';
import { MainButtonStyles } from '../Button/styles.js';
import { MetallsButtonStyles } from '../Button/styles.js';

export const Header = () => {
    return (
        <Box
            className = 'header'
            component="header" sx={{
            height: '100px',
            display: 'flex',
            paddingLeft: '2%',
            alignItems: 'center',
            borderBottom: '1px solid #ccc',
            background: '#363c4c',
        }}>
            <Box
                className = 'logo-img'
                component="div" sx={{
                display: 'flex',
                width: '150px',
                height: '90px',
                marginRight: '50px',
            }}
            >
                <img src={logo} alt="Imetalls" style={{width: '150%', height: '100%', marginRight: '130px'}} />
                <Box component="section" sx={{ display: 'flex', flexFlow: 'row', alignItems: 'end' }}>
                    <Button variant="contained" sx={MainButtonStyles}>Главная</Button>
                    <Button variant="contained" sx={MetallsButtonStyles}>Золото</Button>
                    <Button variant="contained" sx={MetallsButtonStyles}>Серебро</Button>
                    <Button variant="contained" sx={MetallsButtonStyles}>Палладий</Button>
                    <Button variant="contained" sx={MetallsButtonStyles}>Платина</Button>
                </Box>
            </Box>
        </Box>
    );
}
