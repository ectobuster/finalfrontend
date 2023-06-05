
import React, { FC } from 'react';
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

interface CrearTecnologiaProps {
  setLoad: any,
  load: boolean
}

const CrearTecnologia: FC<CrearTecnologiaProps> = ({
  setLoad,
  load
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Crear Tecnologia
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Formik
          initialValues={{ 
            nombre: '', 
            imagen: '',
          }}
          validationSchema={ Yup.object({
            nombre: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            imagen: Yup.string(),
          })}
          onSubmit={async(values, { setSubmitting }) => {
            const response = await axios.post(`${import.meta.env.VITE_URL_SERVER}/api/tecnologias`, values);
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
            setFieldValue
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogTitle id="alert-dialog-title">
                Crear un nuevo Tecnologia
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
                  Crear 
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}

export default CrearTecnologia;