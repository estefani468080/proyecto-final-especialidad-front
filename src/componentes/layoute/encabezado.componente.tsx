import {Link} from "react-router-dom";
import './encabezado.css';

/**
 * Encabezado que contiene los links para navegar entre las páginas

 * @return {Element}
 */
const Encabezado: () => JSX.Element = () => {

    return <header>
            <div>
                <div>
                    <h2>Examen Final Especialidad Frontend</h2>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/favoritos">Favoritos</Link></li>
                        <li><Link to="/detalle">Detalle</Link></li>
                    </ul>
                </nav>
            </div>
    </header>
}

export default Encabezado