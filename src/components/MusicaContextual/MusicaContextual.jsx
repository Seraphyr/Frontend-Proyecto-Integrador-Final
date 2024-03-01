import "./musicaContextual.css";
import Header from "../Header/Header";
import useMusicaContextual from "../../../api/useMusicaContextual";
import { useEffect, useState } from "react";
import usePlaylist from "../../../api/usePlaylist";
import Playlist from "../Playlist/Playlist"
import { useLoading } from "../../../api/useLoading";

export default function MusicaContextual() {

  const [verMusicaContextual,setVerMusicaContextual] = useState("ver")
  const [verPlaylist, setVerPlaylist] = useState("noVer")

  const {musicaContextual, playlistMC} = usePlaylist()

  const [listaGeneros, setListaGeneros] = useState([])
  const {loading, startLoading, stopLoading} = useLoading()

  function recuperarGeneros(generoID) {
    if(listaGeneros.includes(generoID)){
      setListaGeneros(listaGeneros.filter((c) => c !== generoID))
    } if(listaGeneros.length < 3){  
      setListaGeneros([...listaGeneros, generoID])
    }
}

function crearPlaylist() {
  startLoading();
  musicaContextual(listaGeneros)
  setVerPlaylist("ver")
  setVerMusicaContextual("noVer")
  stopLoading();
}

if (loading) {
  return <Load />;
}

  const {
    verActividad,
    verEstadoAnimo,
    verClima,
    verGenero,
    listaActividad,
    listaEstadoAnimo,
    listaClima,
    listaGenero,
  } = useMusicaContextual();

  useEffect(() => {
    verActividad(), verEstadoAnimo(), verClima(), verGenero();
  }, []);
  return (
    <>
    <div className={verMusicaContextual}>
      <Header titulo="Música Contextual" />
      <div className="contenedor__MContextual">
        
        <form action="">
            <div className="MC_selects__contenedor">
          <label className="MC__label">¿Cuál es la ocasión?</label>
          <select name="" id="" className="MC__select" defaultValue="Actividad">
            <option disabled>
              Actividad
            </option>
            {listaActividad.map((actividad) => {
              return (
                
                  <option key={actividad.id} value={actividad.id}>
                    {actividad.nombre}
                  </option>
                
              );
            })}
          </select>

          <label className="MC__label">¿Cómo te sientes?</label>
          <select name="" id="" className="MC__select" defaultValue="Estado de Ánimo">
            <option disabled>
              Estado de Ánimo
            </option>
            {listaEstadoAnimo.map((estadoAnimo) => {
              return (
                
                  <option key={estadoAnimo.id} value={estadoAnimo.id}>
                    {estadoAnimo.nombre}
                  </option>
                
              );
            })}
          </select>

          <label className="MC__label">¿Cómo está el clima?</label>
          <select name="" id="" className="MC__select" defaultValue="Clima">
            <option disabled>
              Clima
            </option>
            {listaClima.map((clima) => {
              return (
                
                  <option key={clima.id} value={clima.id}>
                    {clima.nombre}
                  </option>
                
              );
            })}
          </select>
          </div>

          <div className="MC__genero">
            <p className="MC__label">Selecciona hasta 3 géneros:</p>
            <div className="genero__contenedor">
              {listaGenero.map((genero) => {
                return (
                  
                    <span onClick={() => recuperarGeneros(genero.id)} className={`genero__item ${listaGeneros.includes(genero.id) ? 'generoSeleccionado' : ''}`}
                    key={genero.id}>
                      {genero.nombre}
                    </span>
                  
                );
              })}
            </div>
          </div>  
        </form>
        <button className="MC__boton" onClick={crearPlaylist}>Crear Playlist</button>
      </div>
      </div>

      <div className={verPlaylist}>
                <Playlist playlist={playlistMC} />
            </div>
    </>
  );
}

