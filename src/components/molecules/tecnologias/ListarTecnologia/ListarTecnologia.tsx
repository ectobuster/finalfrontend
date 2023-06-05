
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
import Itecnologias from 'src/interfaces/ITecnologias';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PhotoRoundedIcon from '@mui/icons-material/PhotoRounded';
import { fileURLToPath } from 'url';

interface ListarTecnologiaProp {
  load: boolean,
  setDataEliminar: any,
  setDataModificar: any,
}

const ListarTecnologia: React.FC<ListarTecnologiaProp> = ({
  load = false,
  setDataEliminar,
  setDataModificar,
}) => {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8080/api/tecnologias');
      setRows(response.data.users);
      
    };
    fetchData();
  }, [load]);

  const handleEliminar = async(idtecnologia: number) => {
    const respuesta =await axios.delete(`http://localhost:8080/api/tecnologias/${idtecnologia}`)
    setDataEliminar(idtecnologia);
  };

  const handleActualizar = (idtecnologia: number) => {
    setDataModificar(idtecnologia); 
  };
  const handleActualizarFoto = (idtecnologia: number , file:string) => {

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
          {rows.map((row: Itecnologias) => (
            <TableRow
              key={row.idtecnologia}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell>
                {
                row.imagen &&  <img width={20} src = {`http://localhost:8080/uploads/${row.imagen} `}></img>
                } 
              </TableCell>
              <TableCell>
                <IconButton color="primary" aria-label="Editar" component="label" onClick={ () => {handleActualizar(row.idtecnologia)}} >
                  <EditIcon />
                </IconButton>
                <IconButton color="primary" aria-label="Eliminar" component="label" onClick={ () => {handleEliminar(row.idtecnologia)}}>
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

export default ListarTecnologia;