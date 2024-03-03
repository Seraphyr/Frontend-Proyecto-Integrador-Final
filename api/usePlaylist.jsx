import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function usePlaylist() {
  const [playlist, setPlaylist] = useState([]);
  const [playlistMC, setPlaylistMC] = useState([]);
  const [playlistUsuario, setPlaylistUsuario] = useState([]);
  const [duracionTotalMinutes, setDuracionTotalMinutes] = useState([]);
  const [duracionTotalSeconds, setDuracionTotalSeconds] = useState([]);

  const cupidoMusical = async (listaArtistas) => {
    const response = await fetch("http://localhost:3000/crearCupidoMusical", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: Cookies.get("token"),
      },

      body: JSON.stringify({
        listaArtistas,
      }),
    });
    const data = await response.json();
    setPlaylist(data);
  };

  const musicaContextual = async (listaGeneros) => {
    const response = await fetch(
      "http://localhost:3000/crearMusicaContextual",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: Cookies.get("token"),
        },

        body: JSON.stringify({
          listaGeneros,
        }),
      }
    );
    const data = await response.json();
    setPlaylistMC(data);
  };

  const verPlaylistUsuario = async () => {
    const response = await fetch("http://localhost:3000/verPlaylistUsuario", {
      headers: {
        "Content-Type": "application/json",
        token: Cookies.get("token"),
      },
    });
    const data = await response.json();
    setPlaylistUsuario(data);
  };

  const verDuracionPlaylist = async (listaCanciones) => {
    const response = await fetch("http://localhost:3000/verDuracionPlaylist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: Cookies.get("token"),
      },
      body: JSON.stringify({
        listaCanciones,
      }),
    });
    const data = await response.json();
    if (data[0] && data[0].sum) {
      setDuracionTotalMinutes(data[0].sum.minutes);
      setDuracionTotalSeconds(data[0].sum.seconds);
    }
  };

  return {
    cupidoMusical,
    playlist,
    musicaContextual,
    playlistMC,
    verPlaylistUsuario,
    playlistUsuario,
    verDuracionPlaylist,
    duracionTotalMinutes,
    duracionTotalSeconds,
  };
}
