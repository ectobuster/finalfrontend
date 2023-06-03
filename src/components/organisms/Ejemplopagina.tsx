import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './organisms.css'


export default function Ejemplopagina() {
    return (
<div  className="Seccion contenedor-flex fondoceleste" >
    <div >
    <Box className='H1titulo'>Gatitosbebe.com</Box> 
    <Box className='H3' width={600}>En este proyecto diseñamos una landing page para adopcion de felinos presentandolos como influencers de una agencia de talentos</Box> 
    <Button href="proyectos" variant="contained" color="secondary" >
        Mira todos mis proyectos</Button>
    <Button href="proyectos" variant="text" color="secondary" >
            Visita el proyecto</Button> 
    </div>
    <Box
        component="img"
        sx={{ height: 300, width: 600,}}
        alt="Proyecto ejemplo"
        src='https://s3-alpha-sig.figma.com/img/2c07/8fd1/7f729c26eda492a8a9249a61228c2f0a?Expires=1686528000&Signature=bKRCS1S0KQVF4llgXh0dKumBtwQbd68-tbLkkvk50eS9VsR4BEeK5xkmtO99IX475E8j3-Y9i-4pl4davBnQlx96AXAyzZ7fheDXOceUDLI08Tl5~hVHVFPHEJ2B7WJlgMETNKoMy~wuoPiieRyH-UzxSZMB-HoIfjE5BzJOZS0BeM4bB5e~Uin7pFZiWoqELaoLMhQczqbif7TOiAC78zjnFNUM-ngSbGpzBvdjVoYSCbeqsH9q-Ap7K25QuyZMlvABUNRp7W-kSVFBfX6~kshR0mFsEk5Zq~STN1X66iRlleJDNkwpwbyhofD5jvMbaCd~Wns5QFYJ96-RWDeOEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    />
</div>
      );
}