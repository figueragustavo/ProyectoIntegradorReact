import * as React from 'react';
//import { useContext } from "react";
//import { AppContext } from "../context/AppContext";
import { FiHeart } from "react-icons/fi";
import { useState } from 'react';


function Card(props) {
  const [activado, setActivado] = useState(false);
  
  const {movie} = props;

  return (

        <div className="card p-2 col-4 col-sm-3 col-xl-2" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="Peliculas" />
          <div className="card-body d-flex flex-column justify-content-between gap-4">
            <div>
              <h5 className="card-title">{movie.original_title}</h5>
            </div>
            <div className='d-flex justify-content-between'>
              <a href="#1" className="text-danger"><FiHeart fill={activado ? "red" : "none"} onClick={() => activado ? setActivado(false): setActivado(true)} /></a>
              <p className="card-text">Calificación {movie.vote_average}</p>
            </div>
          </div>
        </div>


  );
}

export default Card;