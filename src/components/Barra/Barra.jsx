import './barra.css';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function Barra() {
    const location = useLocation();

    return (
        <div className="fixed-bar">
            <Link to="/home">
                <img className="icono-barra" src={location.pathname === '/home' ? '/casanegra.png' : '/casatrans.png'} alt="Home" />
            </Link>
            <Link to="/buscador">
                <img className="icono-barra" src={location.pathname === '/buscador' ? '/lupanegra.png' : '/lupatrans.png'} alt="Search" />
            </Link>
            <Link to="/perfil">
                <img className="icono-barra" src={location.pathname === '/perfil' ? '/amigonegro.png' : '/amigotrans.png'} alt="Profile" />
            </Link>
            <Link to="/home">
                <img className="icono-barra" src={location.pathname === '/friends' ? '/amigosnegro.png' : '/amigostrans.png'} alt="Friends" />
            </Link>
        </div>
    );
}

export default Barra;