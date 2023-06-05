import Container from '@mui/material/Container';
import ResponsiveAppBar from "../../components/molecules/ResponsiveAppBar copy"
import CrearExperiencia from '../../components/molecules/experiencia/CrearElaboral/CrearElaboral';
import ListarExperiencia from '../../components/molecules/experiencia/ListarElaboral/ListarElaboral';
import { useState } from 'react';
import EliminarExperiencia from '../../components/molecules/experiencia/EliminarElaboral/EliminarElaboral';
import ActualizarExperiencia from '../../components/molecules/experiencia/ActualizarElaboral/ActualizarElaboral';

import { RootState } from 'src/lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function CMSexperiencia() {

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
      <CrearExperiencia setLoad={setLoad} load={load} />
      <ListarExperiencia load={load} setDataEliminar={setDataEliminar} setDataModificar={setDataModificar} />
      <EliminarExperiencia dataEliminar={dataEliminar}  load={load} setLoad={setLoad}  />
      <ActualizarExperiencia dataModificar={dataModificar} setLoad={setLoad} load={load} />
    </Container>
    </div>
  );
}

export default CMSexperiencia