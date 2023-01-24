import * as React from 'react';
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import Row from 'react-bootstrap/Row';



function Cards({ props }) {

  const movies = useContext(AppContext);
  const url = "https://image.tmdb.org/t/p/w500";



  return (

    <div className='row justify-content-center'>
        {movies.map((movie) => (
        <div className="card col-4" style={{ width: '25rem' }}>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className="card-img-top" alt="Peliculas" />
          <div className="card-body d-flex flex-column justify-content-between gap-4 ">
            <h5 className="card-title">{movie.original_title}</h5>
            <p className="card-text">{movie.overview}</p>
            <button className='btn btn-info'>hola</button>
          </div>
        </div>

      ))}

    </div>

  );
}

export default Cards;
