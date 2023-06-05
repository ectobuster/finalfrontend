
import React, { FC, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import IProyectos from '../../../../interfaces/IProyectos';

interface ActualizarProyectoProps {
  setLoad: any,
  load: boolean,
  dataModificar: number | string,
}

const ActualizarProyecto: FC<ActualizarProyectoProps> = ({
  setLoad,
  load,
  dataModificar
}) => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({} as IProyectos);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const consultarPorId = async(idproyecto: number | string) => {
    const response = await axios.get(`${import.meta.env.VITE_URL_SERVER}/api/proyectos/${idproyecto}`);
    setFormData(response.data.user as IProyectos);
  }

  useEffect(() => {
    if(dataModificar){
      consultarPorId(dataModificar);
    }
    setOpen(dataModificar ? true : false)
  }, [dataModificar])

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Formik
          enableReinitialize
          initialValues={{ 
            nombre: formData.nombre || '', 
            descripcion: formData.descripcion || '',
            imagen: formData.imagen || '',
            url: formData.url || '',
            fecha: formData.fecha || '',
            
          }}
          validationSchema={ Yup.object({
            nombre: Yup.string()
              .max(50, 'Must be 15 characters or less')
              .required('Required'),
              fecha: Yup.string()
              .required('Required'),
          })}
          onSubmit={async(values, { setSubmitting }) => {
            const response = await axios.put(`${import.meta.env.VITE_URL_SERVER}/api/Proyectos/${dataModificar}`, values);
            setLoad(!load);
            setOpen(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogTitle id="alert-dialog-title">
                Actualizar Proyecto
              </DialogTitle>
              <DialogContent>
                  
                  <TextField 
                    sx={{
                      mt: 1
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Nombre"
                    name="nombre"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nombre}
                    error={Boolean(errors.nombre)}
                    helperText={errors.nombre}
                  />

                  <TextField 
                    sx={{
                      mt: 3
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="descripcion"
                    name="descripcion"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.descripcion}
                    error={Boolean(errors.descripcion)}
                    helperText={errors.descripcion}
                  />



<TextField 
                    sx={{
                      mt: 3
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="fecha"
                    name="fecha"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fecha}
                    error={Boolean(errors.fecha)}
                    // helperText={errors.fecha}
                  />


                  <TextField 
                    sx={{
                      mt: 3
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="url"
                    name="url"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.url}
                    error={Boolean(errors.url)}
                    helperText={errors.url}
                  />

<input
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue("imagen", event.target.files);
                    }}
                  />


                  
              
              </DialogContent>
              <DialogActions>
                <Button type="submit" >
                  Actualizar 
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}

export default ActualizarProyecto;