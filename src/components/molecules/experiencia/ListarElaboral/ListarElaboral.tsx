
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Iexperiencia from 'src/interfaces/Iexperiencia';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PhotoRoundedIcon from '@mui/icons-material/PhotoRounded';
import { fileURLToPath } from 'url';

interface ListarElaboralProp {
  load: boolean,
  setDataEliminar: any,
  setDataModificar: any,
}

const ListarElaboral: React.FC<ListarElaboralProp> = ({
  load = false,
  setDataEliminar,
  setDataModificar,
}) => {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8080/api/elaboral');
      setRows(response.data.users);
      
    };
    fetchData();
  }, [load]);

  const handleEliminar = async(idusuario: number) => {
    const respuesta =await axios.delete(`http://localhost:8080/api/elaboral/${idusuario}`)
    setDataEliminar(idusuario);
  };

  const handleActualizar = (idusuario: number) => {
    setDataModificar(idusuario); 
  };
  const handleActualizarFoto = (idusuario: number , file:string) => {

  };


  return (
    <TableContainer component={Paper}>
      <Table  sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{backgroundColor: '#a9d3a4'}}>
            <TableCell>Nombre</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Contraseña</TableCell>
            <TableCell>Foto</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: Iexperiencia) => (
            <TableRow
              key={row.idexperiencia_laboral}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.fecha_inicio}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.descripcion}
              </TableCell>
              <TableCell>
                {
                row.foto &&  <img width={20} src = {`http://localhost:8080/uploads/${row.foto} `}></img>
                }
              </TableCell>
              <TableCell>{row.url}</TableCell>
              <TableCell>
                <IconButton color="primary" aria-label="Editar" component="label" onClick={ () => {handleActualizar(row.idexperiencia_laboral)}} >
                  <EditIcon />
                </IconButton>
                <IconButton color="primary" aria-label="Eliminar" component="label" onClick={ () => {handleEliminar(row.idexperiencia_laboral)}}>
                  <DeleteIcon />
                </IconButton>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

}

export default ListarElaboral;