import Container from '@mui/material/Container';
import ResponsiveAppBar from "../../components/molecules/ResponsiveAppBar copy"
import CrearProyecto from '../../components/molecules/proyectos/CrearProyecto/CrearProyecto';
import ListarProyecto from '../../components/molecules/proyectos/ListarProyecto/ListarProyecto';
import { useState } from 'react';
import EliminarProyecto from '../../components/molecules/proyectos/EliminarProyecto/EliminarProyecto';
import ActualizarProyecto from '../../components/molecules/proyectos/ActualizarProyecto/ActualizarProyecto';

import { RootState } from 'src/lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function CMSproyectos() {

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
      <CrearProyecto setLoad={setLoad} load={load} />
      <ListarProyecto load={load} setDataEliminar={setDataEliminar} setDataModificar={setDataModificar} />
      <EliminarProyecto dataEliminar={dataEliminar}  load={load} setLoad={setLoad}  />
      <ActualizarProyecto dataModificar={dataModificar} setLoad={setLoad} load={load} />
    </Container>
    </div>
  );
}

export default CMSproyectos