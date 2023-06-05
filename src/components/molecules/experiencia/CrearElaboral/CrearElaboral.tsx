
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

interface CrearElaboralProps {
  setLoad: any,
  load: boolean
}

const CrearElaboral: FC<CrearElaboralProps> = ({
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
        Crear Elaboral
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Formik
          initialValues={{ 
            fecha_inicio: '', 
            descripcion: '',
            nombre: '',
            url: '',
            foto: '',
            
          }}
          validationSchema={ Yup.object({
            nombre: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            fecha_inicio: Yup.string().required('Required'),
            descripcion: Yup.string(),
            foto: Yup.mixed(),
            url: Yup.string(),
          })}
          onSubmit={async(values, { setSubmitting }) => {
            const response = await axios.post(`http://localhost:8080/api/elaboral`, values);
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
                Crear un nuevo Elaboral
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
                    label="Foto"
                    name="foto"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.foto}
                    error={Boolean(errors.foto)}
                    helperText={errors.foto}
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

export default CrearElaboral;