import Header from "../Header/Header";
import "./Registro.css";
import { Link } from "react-router-dom";

export default function Registro({setVerRegistro1, setVerRegistro2, setEmail}) {
  

async function handleOnSumbit(e) {
  e.preventDefault();
  setVerRegistro1("noVer")
  setVerRegistro2("ver")
  setEmail(e.target["registroEmail"].value)
}

  return (
    <>
      <Header titulo={"Crear Cuenta"} />
      <div className="conteiner__registro">
        <h1 className="registro__titulo">¿Cuál es tu correo eléctronico?</h1>
        <div className="registro__form">
          <p className="registro__parrafo">Correo electónico:</p>
          <form action="" onSubmit={handleOnSumbit}>
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
             
                <button className="boton__registro">Continuar</button>
             
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
