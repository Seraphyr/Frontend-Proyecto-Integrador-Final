import "./registros.css"
import { useState } from 'react';
import Registro from '../Registro/Registro.jsx';
import Registro2 from '../Registro2/Registro2.jsx';
import useUsuarios from '../../../useUsuarios'



export default function InicioSesion() {
    const {registro} = useUsuarios()

    const [verRegistro1, setVerRegistro1] = useState("ver")
    const [verRegistro2, setVerRegistro2] = useState("noVer")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    console.log(email);
    console.log(username);
    console.log(password);


    return(
        <>
        <div className={verRegistro1}>
            <Registro setVerRegistro1={setVerRegistro1} setVerRegistro2={setVerRegistro2} setEmail={setEmail}/>
        </div>
        <div className={verRegistro2}>
            <Registro2 setVerRegistro1={setVerRegistro1} setVerRegistro2={setVerRegistro2} setUsername={setUsername} setPassword={setPassword} email={email} username={username} password={password} registro={registro}/>
        </div>
        </>
    )
}