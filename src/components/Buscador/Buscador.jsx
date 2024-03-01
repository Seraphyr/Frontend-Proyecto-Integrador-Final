import React, { useState } from 'react';
import './buscador.css';
import Barra from '../Barra/Barra';
import useCanciones from "../../../api/useCanciones.jsx"

function Buscador() {
  const [busqueda, setBusqueda] = useState('');
  const [canciones, setCanciones] = useCanciones();

  const manejarCambio = (evento) => {
    setBusqueda(evento.target.value);
  };

  const cancionesFiltradas = canciones.filter(cancion => cancion.nombre.toLowerCase().includes(busqueda.toLowerCase()));

  return (
    <>
    <div>
      <h1 className='title'>Buscador</h1>
      <input className="inputbuscador" type="text" placeholder="   ¿Qué deseas escuchar?" value={busqueda} onChange={manejarCambio} />
      <div className="grid-container">
        {cancionesFiltradas.map((cancion, index) => (
          <div key={index} className="grid-item">
            <div className="grid-item-canciones">
              <img src={cancion.imagen} alt={cancion.nombre} />
            </div>
            <p className="grid-item-name">{cancion.nombre}</p>
          </div>
        ))}
      </div>
    </div>
    <Barra />
    </>
  );
}

export default Buscador;