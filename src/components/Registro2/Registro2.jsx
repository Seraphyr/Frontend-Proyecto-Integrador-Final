import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./registro2.css";

export default function Registro2({setVerRegistro1, setVerRegistro2, setUsername, setPassword, email, username, password ,registro}) {
const navigate = useNavigate()
  async function handleOnSumbit(e) {
    e.preventDefault();
    setUsername(e.target["registroNombre"].value)
    setPassword(e.target["registroContra"].value)
    setVerRegistro1("ver")
    setVerRegistro2("noVer")
    registro(email, username, password)
  }

  return (
    <>
      <Header titulo={"Crear Cuenta"} />
      <div className="conteiner__registro2">
        <h1 className="registro__titulo2">
          Ingresa un nombre de usuario y contraseña:
        </h1>
        <div className="registro__form2">
          <form action="" onSubmit={handleOnSumbit}>
            <p className="registro__parrafo2">Nombre de Usuario:</p>
            <input
              type="text"
              className="registro__input2"
              name="registroNombre"
              id="registroNombre"
            />
            <p className="registro__parrafo2">Contraseña:</p>
            <input
              type="password"
              className="registro__input2"
              name="registroContra"
              id="registroContra"
            />
            <div className="contenedor__checkbox">
              <input type="checkbox" className="registro__checkbox" />
              <label className="checkbox__label">He leído y acepto los <span className="TyC">Términos</span> y <span className="TyC">Condiciones</span></label>
            </div>
            <div className="registro__boton2">
              {/* <Link to={"/"}> */}
              <button>Continuar</button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
