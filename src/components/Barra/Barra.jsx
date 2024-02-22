
import './barra.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function Barra() {
    const [iconoActivo, setIconoActivo] = useState('/home');
    return (
        <div className="fixed-bar">
            <Link to="/home" onClick={() => setIconoActivo('/home')}>
                <img className="icono-barra" src={iconoActivo === '/home' ? '/casanegra.png' : '/casatrans.png'} alt="Home" />
            </Link>
            <Link to="/home" onClick={() => setIconoActivo('/search')}>
                <img className="icono-barra" src={iconoActivo === '/search' ? '/lupanegra.png' : '/lupatrans.png'} alt="Search" />
            </Link>
            <Link to="/home" onClick={() => setIconoActivo('/profile')}>
                <img className="icono-barra" src={iconoActivo === '/profile' ? '/amigonegro.png' : '/amigotrans.png'} alt="Profile" />
            </Link>
            <Link to="/home" onClick={() => setIconoActivo('/friends')}>
                <img className="icono-barra" src={iconoActivo === '/friends' ? '/amigosnegro.png' : '/amigostrans.png'} alt="Friends" />
            </Link>
        </div>
        
        
    );
}

export default Barra;
