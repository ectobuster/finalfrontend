import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './organisms.css'


export default function B1() {
    return (
<div  className="contenedor-flex " >
<Button variant="text">Logo</Button>
    <Box  sx={{
        width: 300,
        height: 35,
        backgroundColor: 'primary.dark',}}
    >
        Barra nav</Box>
    <Box > </Box>
</div>
      );
}