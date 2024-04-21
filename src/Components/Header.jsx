import { Link } from "react-router-dom"
import converlandLogo from '../assets/Logos/converland.png';

export default function Header() {
    return (
        <header className="header1">
            <div className="headerNAV">
                <div className="Logo">
                    <img src={converlandLogo} alt="ConverLand LOGO" />
                </div>
                <div className="Botonera1">
                    <Link className="Link1">Sobre ConverLand</Link>
                    <Link className="Link1">Explorador Categorías</Link>
                    <Link className="Link1">Terminos Y Condiciones</Link>
                </div>
            </div>
            <div className="Botonera2">
                <div className="boton1">
                    <Link className="Link2">Iniciar Sesión</Link>
                </div>
            </div>
        </header>
    )
}
