import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './organisms.css'


export default function ProyectoG() {
    return (
<div  className="Seccion contenedor-flex " >
    <div className="Seccion contenedor-flexV2 width" >
        <Box>ultimo proyecto</Box>
        <Box className='H1titulo'>
            Landing page CIPSA</Box>
        <Box>portal en el que los clientes de CIPSA pueden utilizar los diferentes servicios que ofrece la empresa electrica mas grande del pais</Box>
    </div>  
    <Box
        component="img"
        sx={{ height: 300, width: 600,}}
        alt="Proyecto ejemplo"
        src='https://s3-alpha-sig.figma.com/img/8006/94a8/c101509c1d1c8b994f8196b3e398e369?Expires=1686528000&Signature=EJDP4KiGSd5KlQQVB0o3--oHGgooKT~98Wtx3N04zSPsWEvkzdgq-ocu9VHAQOtAQzpzntLUxkOVtnM1uODQ-2Jx6BGUy2q8M3ELZZD9HmjVFH8qS5-CHawjytKcLKtX~OuDPJax4ilAa8q4zw4bfwZj~sRS~hrZNKqOwYKzQSxGztFJb-UkNzEe~Tkw~hhG1YFOe3VKvDpOrOOOxc1mfjRpLtI~uMpx8dFA2yHC75QSTeo-nmxp6mfn8POh7uD-V2l6CBf~kAcMRhviPEaunCVcUMqrIP7yX~czQe56XKydkHzGH0McqnFZm6Ii98lO1M3qvHyTQ5nb0DTx7gShJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
       />
</div>
      );
}