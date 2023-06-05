
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
import Iexperiencia from '../../../../interfaces/Iexperiencia';

interface ActualizarElaboralProps {
  setLoad: any,
  load: boolean,
  dataModificar: number | string,
}

const ActualizarElaboral: FC<ActualizarElaboralProps> = ({
  setLoad,
  load,
  dataModificar
}) => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({} as Iexperiencia);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const consultarPorId = async(idusuario: number | string) => {
    const response = await axios.get(`http://localhost:8080/api/elabora/${idusuario}`);
    setFormData(response.data.user as Iexperiencia);
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
            fecha_inicio: formData.fecha_inicio || '',
            url: formData.url || '',
            foto: formData.foto || '',
            
          }}
          validationSchema={ Yup.object({
            nombre: Yup.string()
              .max(50, 'Must be 15 characters or less')
              .required('Required'),
            fecha_inicio: Yup.string()
              .required('Required'),
          })}
          onSubmit={async(values, { setSubmitting }) => {
            const response = await axios.put(`http://localhost:8080/api/elabora/${dataModificar}`, values);
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
                Actualizar usuario
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
                    label="fecha_inicio"
                    name="fecha_inicio"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fecha_inicio}
                    error={Boolean(errors.fecha_inicio)}
                    helperText={errors.fecha_inicio}
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
                      setFieldValue("foto", event.target.files);
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

export default ActualizarElaboral;