import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './organisms.css'


export default function TPresentacion() {
    return (
<div   className="Seccion contenedor-flex Bgimage fondoceleste H1titulo" >
    <Box >Mi nombre es Roberto Villalta <br/> y soy Fullstack Developer
    <br/>
    <Button href="proyectos" variant="contained" color="success" >
      Mira mis proyectos web</Button>
    </Box>
    <Box
        component="img"
        sx={{ height: 300, width: 600,}}
        alt="Proyecto ejemplo"
        src="https://s3-alpha-sig.figma.com/img/1203/622a/38b382ea3391bd34a1800e65682d0dcb?Expires=1686528000&Signature=h0zOdTRaBfOHjQkP~UwKpxYeRmHykUxznceceh6r6VgLYLoeXw-OZM-7vx0pjET7rnTXUx4oekSRpL0vMNv4NupDrxPmBX2Mmf8ui8Lmll~O0fii6Fqimh4OcWzxFumhSc0eotZ-xQpnnM0eias8JuAtU0EU37HYodmpBfsL9llw8WmoxWP0gFI~1JWGiutAw7CFRAfgeMDCY8~i0SiN45n6q4Hn40TIIbZw-0N5kPKrKoqqlt-urxXApdz-aKCX3eLOgvYiFtJrssWZ9nuPw3cZEHcraiy4K8lu9OsB9cyx23o831TWgHUkAbtU9cEN~ZMlHdRFvxlTME5wSg~PSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />
</div>
      );
}