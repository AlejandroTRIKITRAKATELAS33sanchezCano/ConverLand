import { main } from '@cloudinary/url-gen/qualifiers/videoCodecProfile';
import { createTheme } from '@mui/material/styles';

// Obtiene los colores de la paleta CSS
const paletaDeColores = {
    principal: '#CAF0FF',
    secundario: '#BDA6C4',
    fuerte: '#97BCFD',
    claro: '#CCFDD9',
    oscuro: '#07384b',
};

// Define tu tema claro utilizando los colores de la paleta
export const lightTheme = createTheme({
    palette: {
        type: 'light',
        principal: {
            main: paletaDeColores.principal,
        },
        secundario: {
            main: paletaDeColores.secundario,
        },
        fuerte: {
            main: paletaDeColores.fuerte,
        },
        claro: {
            main: paletaDeColores.claro,
        },
        oscuro:{
            main: paletaDeColores.oscuro,
        }
        // Otros colores de tu paleta aquí si los necesitas
    },
});