import Container from '@mui/material/Container';
import ResponsiveAppBar from "../../components/molecules/ResponsiveAppBar copy"
import CrearUsuario from '../../components/molecules/Usuarios/CrearUsuario/CrearUsuario';
import ListarUsuario from '../../components/molecules/Usuarios/ListarUsuario/ListarUsuario';
import { useState } from 'react';
import EliminarUsuario from '../../components/molecules/Usuarios/EliminarUsuario/EliminarUsuario';
import ActualizarUsuario from '../../components/molecules/Usuarios/ActualizarUsuario/ActualizarUsuario';

import { RootState } from 'src/lib/store';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function CMS() {

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
      <CrearUsuario setLoad={setLoad} load={load} />
      <ListarUsuario load={load} setDataEliminar={setDataEliminar} setDataModificar={setDataModificar} />
      <EliminarUsuario dataEliminar={dataEliminar}  load={load} setLoad={setLoad}  />
      <ActualizarUsuario dataModificar={dataModificar} setLoad={setLoad} load={load} />
    </Container>
    </div>
  );
}

export default CMS