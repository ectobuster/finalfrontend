import * as React from 'react';
import Box from '@mui/material/Box';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import BackHandIcon from '@mui/icons-material/BackHand';
import Container from '@mui/material/Container';
import './organisms.css'


export default function Diferenciadores() {
    return (
<div className="Seccion ">
    <div  className="contenedor-flex fondoblanco" >
      <Box className='H1titulo' margin={10}>Que me hace diferente? </Box>

    </div> 
    <br/>    
    <div  className="contenedor-flex fondoblanco" >
      <div  className="contenedor-flexV">
      <AddReactionIcon fontSize='large'></AddReactionIcon>
        <br /><div className='H3 width Tcenter'>
            Experiencia de usuario <br/> Creo interfaces atractivas y funcionales para una experiencia de usuario excepcional.</div>
      </div>
      <div  className="contenedor-flexV">
        <AltRouteIcon fontSize='large'></AltRouteIcon>
        <br /><div className='H3 width Tcenter'>
            Determinado y resolutivo<br/>Enfrento desafíos con creatividad y perseverancia para obtener resultados efectivos.</div>
      </div>
      <div  className="contenedor-flexV">
        <BackHandIcon fontSize='large'></BackHandIcon>
        <br /><div className='H3 width Tcenter'>
            Colaborador y proactivo<br/>Trabajo en equipo, aporto ideas innovadoras y mejoro la eficiencia del equipo.</div>
      </div>
    </div>        
</div>
      );
}