import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './organisms.css'


export default function PresentacionG() {
    return (
<div  className="Seccion contenedor-flex " >
        <Box
        component="img"
        sx={{ height: 500, width: 350,}}
        alt="Proyecto ejemplo"
        src='fotos/rob.png'
        />  
    <div className="contenedor-flexV ">
    <Box className="H2">un poco sobre mi</Box>
    <Box className="H2 width">Soy un apasionado programador con habilidades en desarrollo web y experiencia en diseño front-end. Me destaco por ser resolutivo, colaborador y proactivo, siempre buscando soluciones efectivas y trabajando en equipo para lograr resultados excepcionales.</Box>
    <Box className="H3">Tecnologia y herramientas:</Box>
    
    </div>
</div>
      );
}