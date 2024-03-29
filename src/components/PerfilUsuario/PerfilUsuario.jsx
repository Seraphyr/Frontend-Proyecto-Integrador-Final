import './perfilUsuario.css';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import Barra from '../Barra/Barra';
import useUsuarios from '../../../api/useUsuarios';
import { useEffect } from 'react';
import usePlaylist from '../../../api/usePlaylist';
import imagenPlaylist from '/imagenPlaylist.jpg'

function Profile() {
  const {verNombre, nombreUsuario} = useUsuarios()
  const {verPlaylistUsuario, playlistUsuario} = usePlaylist()

  useEffect(() => {
    verNombre()
    verPlaylistUsuario()
  }, [])

 
  return (
    
    <>
    <div className="wrapper-profile">
      <header>
        <div className="info-profile">
          <img className="profile-img" src="/logo-gradient-letter.png" alt="" />
          <div className="name-user-profile">
            <h1>{nombreUsuario}</h1>
            <br />
          </div>
          <Link to="/settings">
            <div className="icon-container">
              <img className="setting-icon" src="/setting.png" alt="" />
            </div>
          </Link>
        </div>
      </header>

        <div className="section-playlist-profile">
          <span>Mis Playlists</span>
          <div className="mid-line-profile"></div>

            <label className="btn-create-playlist">
              <input type="radio" />
              <p>Crear Playlist</p>
            </label>
          
        </div>
  
    <div className="playlist__usuario">
     
    {playlistUsuario.map((playlist) => (
       <div className="playlist">
        <img src={imagenPlaylist} alt="playlist" className='imagen__playlist'/>
        <p key={playlist.id}>{playlist.nombre}</p>
        </div>
    ))}
      
    </div>

    </div>
      <Barra/>
    </>
  );
}

export default Profile;