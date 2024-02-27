import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function useArtistas(){
    const [listaArtistas, setListaArtistas] = useState([])
 
    const verArtistas = async () => {
        const response = await fetch("http://localhost:3000/verArtistas")
        const data = await response.json();

        setListaArtistas(data)
    }
   

    return{
        verArtistas,
        listaArtistas
    }
    
}