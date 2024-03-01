import { useState, useEffect } from 'react';
import Cookies from "js-cookie";

const useCanciones = () => {
  const [canciones, setCanciones] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/verCanciones', {
      headers: {
        "Content-Type": "application/json",
        "token": Cookies.get("token"),
      }
    }) 
      .then(response => response.json())
      .then(data => setCanciones(data));
  }, []);

  return [canciones, setCanciones];
};

export default useCanciones;