import Header from "../Components/Header";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button } from "@mui/material";
import { validateEmail, validatePassword } from "../constants/formValidations";
import converLandLogo from '../assets/Logos/converland.png';
import { Link } from "react-router-dom";

export default function Login() {

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return (
        <>
            <Header />
            <section className="ContenedorInfoForm">
                <div className="InformacionRegistro">
                    <img src={converLandLogo} alt="Converland LOGO" />
                    <h2>Empieza A Conocer Gente Con Tus Mismos Gustos</h2>
                </div>
                <div className="formularioRegistro">
                    <h2>Inicia Sesión</h2>
                    <Formik
                        initialValues={{ usuNombre: '', usuCotrasenna: '' }}
                        validate={values => {
                            const errors = {};
                            errors.usuNombre = validateEmail(values.email);
                            errors.usuCotrasenna = validatePassword(values.password);
                            return errors;
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="formulario1">
                                <Field name="usuNombre">
                                    {({ field }) => (
                                        <div>
                                            <TextField
                                                {...field}
                                                type="email"
                                                label="Email"
                                                variant="outlined"
                                                fullWidth
                                                color="oscuro"
                                                InputLabelProps={{ style: { color: '#07384b' } }} // Cambia el color del label aquí
                                                InputProps={{
                                                    style: {
                                                        backgroundColor: "#CCFDD9", // Cambia el color de fondo aquí
                                                    },
                                                }}
                                            />
                                            <ErrorMessage name="email" component="div" style={{ color: '#ff0000' }} />
                                        </div>
                                    )}
                                </Field>
                                <Field name="usuCotrasenna">
                                    {({ field }) => (
                                        <div>
                                            <TextField
                                                {...field}
                                                type="password"
                                                label="Contraseña"
                                                variant="outlined"
                                                fullWidth
                                                color="oscuro"
                                                InputLabelProps={{ style: { color: '#07384b' } }} // Cambia el color del label aquí
                                                InputProps={{
                                                    style: {
                                                        backgroundColor: "#CCFDD9", // Cambia el color de fondo aquí
                                                    },
                                                }}
                                            />
                                            <ErrorMessage name="password" component="div" style={{ color: '#ff0000' }} />
                                        </div>
                                    )}
                                </Field>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secundario"
                                    disabled={isSubmitting}
                                    fullWidth
                                    style={{ color: '#07384b' ,marginTop: '25px' , width: '60%'}} // Cambia el color del texto aquí
                                >
                                    Ingresar
                                </Button>
                                <h3>¿No tienes Cuenta? <Link to="/registro">Registrate</Link></h3>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </>

    )
}
