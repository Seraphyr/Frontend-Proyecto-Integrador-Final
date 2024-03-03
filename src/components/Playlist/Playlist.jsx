import "./playlist.css";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Barra from "../Barra/Barra";
import imagenPlaylist from "/imagenPlaylist.jpg";

export default function Playlist({ playlist }) {
  return (
    <div>
      <Header titulo={"Playlist Generada"} />
      <div className="wrapper-playlist-generated gradient-top">
        <div className="center-covers">
          <img src={imagenPlaylist} alt="" className="imagen__playlist" />
        </div>
        <section className="wrapper-icons-pg">
          <div className="row-icons ">
            <img src="/logo-small.svg" alt="" />
            <img id="small-icon1" src="/verified.svg" alt="" />
            <img src="/share.svg" alt="" />
          </div>

          <div className="row-icons flex-span">
            <span>{/* {durationSong()} */}</span>
            <img id="small-icon2" src="/clock.svg" alt="" />
          </div>
        </section>
        <section className="wrapper-icons-pg">
          <div className="row-icons flex-span-start">
            <img src="/copy.svg" alt="" />
            <span>Crear Copia</span>
          </div>
          <div className="row-icons">
            <img src="/shuffle.svg" alt="" />
            <img id="btn-play" src="/play-btn.svg" alt="" />
          </div>
        </section>
        <div className="main-playlist-wrap">
          <div className="list-songs-pg" />

          {playlist.map((cancion) => {
            return (
              <div key={cancion.id} className="cancion">
                <img src={cancion.imagen} alt="" className="cancion__imagen" />
                <div className="cancion__info">
                  <p className="cancion__nombre">{cancion.nombre}</p>
                  <p className="cancion__artista">{cancion.nombre_artista}</p>
                </div>
                <p className="cancion__duración">
                  {cancion.duracion.minutes}.{cancion.duracion.seconds}m
                </p>
              </div>
            );
          })}
        </div>
        <div className="playlist__barra">
          <Barra />
        </div>
      </div>
    </div>
  );
}
