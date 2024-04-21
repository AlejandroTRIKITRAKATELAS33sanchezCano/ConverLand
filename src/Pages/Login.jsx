import Header from "../Components/Header";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateEmail, validatePassword } from "../constants/formValidations";
import converLandLogo from '../assets/Logos/converland.png';

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
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            errors.email = validateEmail(values.email);
                            errors.password = validatePassword(values.password);
                            return errors;
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="formulario">
                                <label htmlFor="email">Email:</label>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" />

                                <label htmlFor="password">Contraseña:</label>
                                <Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" />

                                <button type="submit" disabled={isSubmitting}>
                                    Ingresar
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </>

    )
}
