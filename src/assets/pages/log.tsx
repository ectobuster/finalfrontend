import Container from '@mui/material/Container';
import ResponsiveAppBar from "../../components/molecules/ResponsiveAppBar copy"
import Login from './../../lib/slice/auth/login';
import { useState } from 'react';



function Log() {



  const [load, setLoad] = useState(false);
  const [dataEliminar, setDataEliminar] = useState('')
  const [dataModificar, setDataModificar] = useState('')
  return (
    <div>
    <ResponsiveAppBar />
    <Container maxWidth="lg" sx={{ mt: 5 }} >
      <Login/>
    </Container>
    </div>
  );
}

export default Log