import Header from "../Header/Header";
import "./registro2.css";

export default function Registro2() {
  return (
    <>
      <Header titulo={"Crear Cuenta"} />
      <div className="conteiner__registro2">
        <h1 className="registro__titulo2">
          Ingresa un nombre de usuario y contraseña:
        </h1>
        <div className="registro__form2">
          <form action="">
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
              <button>Continuar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
