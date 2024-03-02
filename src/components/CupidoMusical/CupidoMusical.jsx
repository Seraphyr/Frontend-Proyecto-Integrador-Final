import { useEffect, useState } from "react";
import useArtistas from "../../../api/useArtistas";
import "./cupidoMusical.css";
import usePlaylist from "../../../api/usePlaylist";
import Header from "../Header/Header";
import Playlist from "../Playlist/Playlist";

import likeIcon from "/like.svg";
import crossIcon from "/cross.svg";
import quitarCancion from "/quitarCancion.svg";

export default function CupidoMusical() {
  const [verCupidoMusical, setVerCupidoMusical] = useState("ver");
  const [verPlaylist, setVerPlaylist] = useState("noVer");
  const [verMatches2, setVerMatches2] = useState("noVer")

  const { verArtistas, listaArtistas } = useArtistas();
  const { artistasRandom, verArtistasRandom } = useArtistas();
  const { listaSeleccionados, verArtistasSeleccionados } = useArtistas();
  const { cupidoMusical, playlist } = usePlaylist();

  const [listaID, setListaID] = useState([]);
  const listaFotosBorrar = listaID

  function recuperarID(artistaID) {
    setListaID([...listaID, artistaID]);
    verArtistasSeleccionados([...listaID, artistaID]);
    verArtistasRandom();
    setVerMatches2("ver2")
  }

  useEffect(() => {
    verArtistas();
    verArtistasRandom();
  }, []);

  function crearPlaylist() {
    cupidoMusical(listaID);
    setVerPlaylist("ver");
    setVerCupidoMusical("noVer");
  }

  function eliminarUltimo() {
    listaFotosBorrar.pop()
    setListaID(listaFotosBorrar)
    verArtistasSeleccionados([...listaID]);
  }

  return (
    <>
      <div className={verCupidoMusical}>
        <Header titulo="Cupido Musical" />

        {artistasRandom.map((artista) => (
          <>
            {" "}
            <div key={artista.id} className="tarjeta">
              <img
                src={artista.imagen}
                alt={artista.nombre}
                className="artist-img"
              />

              <div className="botones">
                <button
                  onClick={() => recuperarID(artista.id)}
                  className="likeButton"
                >
                  <img src={likeIcon} alt="Like" />
                </button>
                <button
                  onClick={() => verArtistasRandom()}
                  className="crossButton"
                >
                  <img src={crossIcon} alt="Cross" />
                </button>
              </div>
            </div>
            <p className="artist-name">{artista.nombre}</p>
          </>
        ))}

        <div className="contenedor__abajo">
            <div className={`matches ${verMatches2}`}>
          <p> Matches actuales:</p>
          <button           
            onClick={() => eliminarUltimo()}
            className="crossButton"
          >
           <img src={quitarCancion} alt="QuitarCancion"/>
          </button>
        </div>
        <div className="imagenesSeleccionados">
          {listaSeleccionados.map((artista) => (
            <img
              src={artista.imagen}
              alt="imagen"
              className="imagen__seleccionada"
            />
          ))}
          <button className="boton__cupido" onClick={crearPlaylist}>Crear Playlist</button>
        </div>

        
      </div>
      </div>

      <div className={verPlaylist}>
        <Playlist playlist={playlist} />
      </div>
      
    </>
  );
}
