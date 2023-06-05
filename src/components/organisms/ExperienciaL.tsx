import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './organisms.css'


export default function ExperienciaL() {
    return (
<div  className="Seccion contenedor-flex fondoceleste" >
     <Box
        component="img"
        sx={{ height: 200, width: 175,}}
        alt="Proyecto ejemplo"
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png'
      />
    <div className="contenedor-flexV2 ">
      <Box className='H1titulo'>Apple</Box>
      <Box className='H3'>Pasantia virtual no remunerada y produc testing anual</Box>
      <Box className='H2'>15/03/2020</Box>
    </div>
</div>
      );
}