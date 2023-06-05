
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
import ITecnologias from '../../../../interfaces/ITecnologias';

interface ActualizarTecnologiaProps {
  setLoad: any,
  load: boolean,
  dataModificar: number | string,
}

const ActualizarTecnologia: FC<ActualizarTecnologiaProps> = ({
  setLoad,
  load,
  dataModificar
}) => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({} as ITecnologias);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const consultarPorId = async(idTecnologia: number | string) => {
    const response = await axios.get(`${import.meta.env.VITE_URL_SERVER}/api/Tecnologias/${idTecnologia}`);
    setFormData(response.data.user as ITecnologias);
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
            imagen: formData.imagen || '',
            
          }}
          validationSchema={ Yup.object({
            nombre: Yup.string()
              .max(50, 'Must be 15 characters or less')
              .required('Required'),
            foto: Yup.string(),
          })}
          onSubmit={async(values, { setSubmitting }) => {
            const response = await axios.put(`${import.meta.env.VITE_URL_SERVER}/api/tecnologias/${dataModificar}`, values);
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
                Actualizar Tecnologia
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

export default ActualizarTecnologia;