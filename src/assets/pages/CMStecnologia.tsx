import Container from '@mui/material/Container';
import ResponsiveAppBar from "../../components/molecules/ResponsiveAppBar copy"
import CrearTecnologia from '../../components/molecules/tecnologias/CrearTecnologia/CrearTecnologia';
import ListarTecnologia from '../../components/molecules/tecnologias/ListarTecnologia/ListarTecnologia';
import { useState } from 'react';
import EliminarTecnologia from '../../components/molecules/tecnologias/EliminarTecnologia/EliminarTecnologia';
import ActualizarTecnologia from '../../components/molecules/tecnologias/ActualizarTecnologia/ActualizarTecnologia';

import { RootState } from 'src/lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function CMStecnologia() {

  const navigate = useNavigate();
  const user: any = useSelector((state: RootState) => state.auth.user);
  const loading: any = useSelector((state: RootState) => state.auth.loading);

  // const [contador, setContador] = useState(0)

  if(loading){
    return <>Cargando</>;
  }

  if(!user){
    navigate('/CMS/log');
    return <></>
  }


  const [load, setLoad] = useState(false);
  const [dataEliminar, setDataEliminar] = useState('')
  const [dataModificar, setDataModificar] = useState('')
  return (
    <div>
    <ResponsiveAppBar />
    <Container maxWidth="lg" sx={{ mt: 5 }} >
      <CrearTecnologia setLoad={setLoad} load={load} />
      <ListarTecnologia load={load} setDataEliminar={setDataEliminar} setDataModificar={setDataModificar} />
      <EliminarTecnologia dataEliminar={dataEliminar}  load={load} setLoad={setLoad}  />
      <ActualizarTecnologia dataModificar={dataModificar} setLoad={setLoad} load={load} />
    </Container>
    </div>
  );
}

export default CMStecnologia