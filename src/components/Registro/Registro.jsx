import Header from "../Header/Header";
import "./registro.css";
import { Link } from "react-router-dom";


export default function Registro() {
  return (
    <>
      <Header titulo={"Crear Cuenta"} />
      <div className="conteiner__registro">
        <h1 className="registro__titulo">¿Cuál es tu correo eléctronico?</h1>
        <div className="registro__form">
          <p className="registro__parrafo">Correo electónico:</p>
          <form action="">
            <input
              type="text"
              className="registro__input"
              name="registroEmail"
              id="registroEmail"
            />
            <p className="registro__form__parrafo">
              Deberás poder confirmarlo luego.
            </p>
            <div className="registro__boton">
              <Link to={"/registro2"}>
                <button className="boton__registro">Continuar</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
