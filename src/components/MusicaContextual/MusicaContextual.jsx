import "./musicaContextual.css";
import Header from "../Header/Header";
import useMusicaContextual from "../../../api/useMusicaContextual";
import { useEffect, useState } from "react";
import usePlaylist from "../../../api/usePlaylist";
import Playlist from "../Playlist/Playlist"

export default function MusicaContextual() {

  const [verMusicaContextual,setVerMusicaContextual] = useState("ver")
  const [verPlaylist, setVerPlaylist] = useState("noVer")

  const {musicaContextual, playlistMC} = usePlaylist()

  const [listaGeneros, setListaGeneros] = useState([])

  function recuperarGeneros(generoID) {
    setListaGeneros([...listaGeneros, generoID])
}

function crearPlaylist() {
  musicaContextual(listaGeneros)
  setVerPlaylist("ver")
  setVerMusicaContextual("noVer")
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
          <select name="" id="" className="MC__select">
            <option disabled selected>
              Actividad
            </option>
            {listaActividad.map((actividad) => {
              return (
                <>
                  <option key={actividad.id} value={actividad.id}>
                    {actividad.nombre}
                  </option>
                </>
              );
            })}
          </select>

          <label className="MC__label">¿Cómo te sientes?</label>
          <select name="" id="" className="MC__select">
            <option disabled selected>
              Estado de Ánimo
            </option>
            {listaEstadoAnimo.map((estadoAnimo) => {
              return (
                <>
                  <option key={estadoAnimo.id} value={estadoAnimo.id}>
                    {estadoAnimo.nombre}
                  </option>
                </>
              );
            })}
          </select>

          <label className="MC__label">¿Cómo está el clima?</label>
          <select name="" id="" className="MC__select">
            <option disabled selected>
              Clima
            </option>
            {listaClima.map((clima) => {
              return (
                <>
                  <option key={clima.id} value={clima.id}>
                    {clima.nombre}
                  </option>
                </>
              );
            })}
          </select>
          </div>

          <div className="MC__genero">
            <p className="MC__label">Selecciona hasta 3 géneros:</p>
            <div className="genero__contenedor">
              {listaGenero.map((genero) => {
                return (
                  <>
                    <span onClick={() => recuperarGeneros(genero.id)} className="genero__item" key={genero.id}>
                      {genero.nombre}
                    </span>
                  </>
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
