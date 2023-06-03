
import React, { FC } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, Radio, RadioGroup, FormControlLabel  } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

interface CrearUsuarioProps {
  setLoad: any,
  load: boolean
}

const CrearUsuario: FC<CrearUsuarioProps> = ({
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
        Crear usuario
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
            email: '',
            contrasenia: '',
            foto: '',
            estado: '',
            
          }}
          validationSchema={ Yup.object({
            nombre: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            contrasenia: Yup.number()
              .min(8, "La contraseña debe tener minimo 8 caracteres")
              .required('Required'),
            foto: Yup.mixed()
              .required('Required'),
            estado: Yup.number()
              .required('Required'),
          })}
          onSubmit={async(values, { setSubmitting }) => {

            const formData = new FormData();
            formData.append('nombre', values.nombre);
            formData.append('email', values.email);
            formData.append('contrasenia', values.contrasenia);
            formData.append('foto', values.foto);
            formData.append('estado', values.estado);

            const response = await axios.post(`http://localhost:8080/api/usuarios`, values);
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
                Crear un nuevo usuario
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
                    label="E-mail"
                    name="email"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                  />

                  <TextField 
                    sx={{
                      mt: 3
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Contraseña"
                    name="contrasenia"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contrasenia}
                    error={Boolean(errors.contrasenia)}
                    helperText={errors.contrasenia}
                  />

                  {/* <TextField 
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
                  /> */}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue("foto", event.target.files);
                    }}
                  />
                  
                  {/* <TextField 
                    sx={{
                      mt: 3
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Estado"
                    name="estado"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.estado}
                    error={Boolean(errors.estado)}
                    helperText={errors.estado}
                  /> */}
<br />
                  <RadioGroup
                    aria-label="Estado"
                    name="estado"
                    value={values.estado}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Activo"
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="Inactivo"
                    />
                  </RadioGroup>
              
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

export default CrearUsuario;