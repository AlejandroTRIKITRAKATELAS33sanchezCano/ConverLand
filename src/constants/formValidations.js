export const validateEmail = value => {
    if (!value) {
        return 'Ingresa Un Email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        return 'Email No Valido';
    }
    return null;
};

export const validatePassword = value => {
    if (!value) {
        return 'Ingresa Una Contraseña';
    }
    return null;
};