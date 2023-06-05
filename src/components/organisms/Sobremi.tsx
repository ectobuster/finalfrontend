import * as React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import IUsuarios from 'src/interfaces/IUsuarios';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './organisms.css'




export default function Sobremi() {

    const [rows, setRows] = useState([]);
    const [firstUser, setFirstUser] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`http://localhost:8080/api/usuarios`, {
        });
        setRows(response.data.users);
        setFirstUser(response.data.users[0]);
      }; 
      fetchData();
    },[]);
    console.log(rows)

    return (
<div  className="Seccion contenedor-flex " > 
<Box
        component="img"
        sx={{ height: 500, width: 350,}}
        alt="Proyecto ejemplo"
        src='fotos/rob.png'
        />  

    <div className="contenedor-flexV ">
    <Box className='H2'>un poco sobre mi</Box>
    <div className='H3 width'> Soy un apasionado programador con habilidades en desarrollo web y experiencia en diseño front-end. Me destaco por ser resolutivo, colaborador y proactivo, siempre buscando soluciones efectivas y trabajando en equipo para lograr resultados excepcionales.  </div>
    <br />
    <Box className='H3'>Tecnologia y herramientas:</Box>
    <div className="contenedor-flex ">
    <Box >A</Box><Box >B</Box><Box >C</Box>
    </div>
    </div>
</div>
      );
}