import Header from "../Header/Header";
import "./registro.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

export default function Registro({setVerRegistro1, setVerRegistro2, setEmail}) {
  const [habilitado, setHabilitado] = useState(true)
  const buttonRef = useRef(null);

async function handleOnSumbit(e) {
  e.preventDefault();
  setVerRegistro1("noVer")
  setVerRegistro2("ver")
  setEmail(e.target["registroEmail"].value)
}

const validarMail = (mail) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase());
};

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
              onChange={(e) => {
                if (!validarMail(e.target.value)) {
                  setHabilitado(true);
                } else {
                  setHabilitado(false);
                }
                
              }}
            />
            <p className="registro__form__parrafo">
              Deberás poder confirmarlo luego.
            </p>
            <div className="registro__boton">
             
                <button className={`${habilitado ?  'disabled-btn': 'boton__registro'}`} disabled={habilitado}>Continuar</button>
             
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
