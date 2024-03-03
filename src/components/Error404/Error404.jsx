import "./error404.css";
import { Link } from 'react-router-dom';
import Header from "../Header/Header";

export default function Error404() {
    return (
        <section className="error-section">
            <Header titulo="Error 404" />
            <img src="/errorPage.png" alt="" className="error404-img" />


            <div className="error-text">
                <h1>No esperábamos esta visita</h1>
                <p>Parece que no podemos encontrar la página que estás buscando.
                    <br />Por favor revisa el URL.
                    <br />Aquí alguna opción que podría ayudarte:
                </p>
                <ul className="menu">
                    <li><Link to="/home">Ir a la página de inicio</Link></li>
                </ul>
            </div>

        </section>
    )
}


