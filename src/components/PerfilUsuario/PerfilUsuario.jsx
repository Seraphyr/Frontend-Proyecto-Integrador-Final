import './PerfilUsuario.css';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import Barra from '../Barra/Barra';

function Profile() {
  
  return (
    <>
    <div className="wrapper-profile">
      <header>
      <Header titulo={"Perfil"} />
        <div className="info-profile">
          <img className="profile-img" src="/logo-gradient-letter.png" alt="" />
          <div className="name-user-profile">
            <h1>Nombre</h1>
            <br />
          </div>
          <Link link to="/settings">
            <div className="icon-container">
              <img className="setting-icon" src="/setting.png" alt="" />
            </div>
          </Link>
        </div>
      </header>

        <div className="section-playlist-ptofile">
          <span>Mis Playlists</span>
          <div className="mid-line-profile"></div>

            <label className="btn-create-playlist">
              <input type="radio" />
              <p>Crear Playlist</p>
            </label>
          
        </div>

    </div>
      <Barra/>
    </>
  );
}

export default Profile;