import Header from "../Components/Header";
import converlandLOGO from "../assets/Logos/converland.png"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button } from "@mui/material";
import { validateEmail, validatePassword } from "../constants/formValidations";

export default function SignUp() {

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };



    return (
        <>
            <Header />
            <section className="seccionRegistro1">
                <div className="formularioRegistro1">
                    <div className="ImgBackground">
                        <img src={converlandLOGO} alt="" />
                    </div>
                    <div className="formularioRegistro2">
                        <h2>Registrate Rápido Y Sencillo</h2>
                        <Formik
                            initialValues={{ usuNombre: '', usuNumBoleta: '' , usuCarrera: '',usuCotrasenna: '' }}
                            validate={values => {
                                const errors = {};
                                errors.usuNombre = validateEmail(values.usuNombre);
                                errors.usuNombre = validatePassword(values.usuNombre);
                                return errors;
                            }}
                            onSubmit={handleSubmit}>

                            {({ isSubmitting }) => (
                                <Form>
                                    <Field name="usuNombre">
                                        {({ field }) => (
                                            <div>
                                                <TextField
                                                    {...field}
                                                    type="text"
                                                    label="Nombre De Usuario"
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
                                                <ErrorMessage name="usuNombre" component="div" style={{ color: '#ff0000' }} />
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="usuNumBoleta">
                                        {({ field }) => (
                                            <div>
                                                <TextField
                                                    {...field}
                                                    type="text"
                                                    label="Numero De Boleta"
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
                                                <ErrorMessage name="usuNombre" component="div" style={{ color: '#ff0000' }} />
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="usuCarrera">
                                        {({ field }) => (
                                            <div>
                                                <TextField
                                                    {...field}
                                                    type="text"
                                                    label="Carrera"
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
                                                <ErrorMessage name="usuNombre" component="div" style={{ color: '#ff0000' }} />
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="Grupo">
                                        {({ field }) => (
                                            <div>
                                                <TextField
                                                    {...field}
                                                    type="text"
                                                    label="Grupo"
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
                                                <ErrorMessage name="usuNombre" component="div" style={{ color: '#ff0000' }} />
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="Edad">
                                        {({ field }) => (
                                            <div>
                                                <TextField
                                                    {...field}
                                                    type="text"
                                                    label="Edad"
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
                                                <ErrorMessage name="usuNombre" component="div" style={{ color: '#ff0000' }} />
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
                                    Registrarse
                                </Button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </section>
        </>

    )
}
