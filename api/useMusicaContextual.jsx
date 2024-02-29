import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function useMusicaContextual(){
    const [listaActividad, setListaActividad] = useState([])
    const [listaEstadoAnimo, setListaEstadoAnimo] = useState([])
    const [listaClima, setListaClima] = useState([])
    const [listaGenero, setGenero] = useState([])

 
    const verActividad = async () => {
        const response = await fetch("http://localhost:3000/verActividad")
        const data = await response.json();

        setListaActividad(data)
    }

    const verEstadoAnimo = async () => {
        const response = await fetch("http://localhost:3000/verEstadoAnimo")
        const data = await response.json();

        setListaEstadoAnimo(data)
    }
    
    const verClima = async () => {
        const response = await fetch("http://localhost:3000/verClima")
        const data = await response.json();

        setListaClima(data)
    }
   
    const verGenero = async () => {
        const response = await fetch("http://localhost:3000/verGenero")
        const data = await response.json();

        setGenero(data)
    }
   
   

    return{
       verActividad,
       verEstadoAnimo,
       verClima,
       verGenero,
       listaActividad,
       listaEstadoAnimo,
       listaClima,
       listaGenero
    }
    
}