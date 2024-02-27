import React, { useState, useEffect } from 'react';
import './buscador.css';
import Barra from '../Barra/Barra';

function Buscador() {
  const [busqueda, setBusqueda] = useState('');
  const [canciones, setCanciones] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/canciones') 
      .then(response => response.json())
      .then(data => setCanciones(data));
  }, []);

  const manejarCambio = (evento) => {
    setBusqueda(evento.target.value);
  };

  const cancionesFiltradas = canciones.filter(cancion => cancion.toLowerCase().includes(busqueda.toLowerCase()));

  return (
    <>
    <div>
      <h1 className='title'>Buscador</h1>
      <input className="inputbuscador" type="text" placeholder="   ¿Qué deseas escuchar?" value={busqueda} onChange={manejarCambio} />
      {cancionesFiltradas.map((cancion, index) => (
        <p key={index}>{cancion}</p>
      ))}
    </div>
    
    
    <Barra />
    </>
  );
}

export default Buscador;