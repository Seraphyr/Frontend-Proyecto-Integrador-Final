import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./registro2.css";
import { useState } from "react";
import eyeOpen from "/eyeOpen.png";
import eyeClosed from "/eyeClosed.png";
import checkboxCheck from "/checkboxCheck.svg"
import checkboxNotCheck from "/checkboxNotCheck.svg"

export default function Registro2({
  setVerRegistro1,
  setVerRegistro2,
  setUsername,
  setPassword,
  email,
  username,
  password,
  registro,
}) {
  const [passwordR, setPasswordR] = useState("");
  const [showPasswordR, setShowPasswordR] = useState(false);

  const [checkbox, setCheckbox] = useState(false)

  function cambiarCheckbox() {
    setCheckbox(!checkbox)
  }

  const togglePasswordVisibility = () => {
    setShowPasswordR(!showPasswordR);
  };

  async function handleOnSumbit(e) {
    e.preventDefault();
   /*  setUsername(e.target["registroNombre"].value); */
    /* setPassword(e.target["registroContra"].value); */
    setVerRegistro1("ver");
    setVerRegistro2("noVer");
    console.log(email);
    console.log(username);
    console.log(password);
    registro(email, username, password);
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="registro__parrafo2">Contraseña:</p>
            <div className="registro__password">
            <input
              className="registro__input2"
              name="registroContra"
              id="registroContra"
              type={showPasswordR ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={showPasswordR ? eyeOpen : eyeClosed}
              alt="toggle password visibility"
              onClick={togglePasswordVisibility}
              className="eye-icon2"
            />
            </div>
            <div className="contenedor__checkbox">
              <img src={checkbox ? checkboxCheck : checkboxNotCheck} alt="checkbox" onClick={cambiarCheckbox}/>
              <label className="checkbox__label">
                He leído y acepto los <span className="TyC"> &nbsp; Términos &nbsp;  </span> y
                <span className="TyC"> &nbsp; Condiciones</span>
              </label>
            </div>
            <div className="registro__boton2">
              <button className="boton__registro2">Continuar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
