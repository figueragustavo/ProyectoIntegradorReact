import * as React from 'react';
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FiHeart } from 'react-icons/fi';

function Cards() {

  const movies = useContext(AppContext);

  return (

    <div className="row mx-0 my-5 gap-4 justify-content-center">
      {movies.map((movie) => (
        <div className="card p-2 col-2">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="Peliculas" />
          <div className="card-body d-flex flex-column justify-content-between gap-4">
            <div>
              <h5 className="card-title">{movie.original_title}</h5>
            </div>
            <div className='d-flex justify-content-between'>
              <a href="#1" className="text-danger"><FiHeart /></a>
              <p className="card-text">Calificación {movie.vote_average}</p>
            </div>
          </div>
        </div>

      ))}

    </div>

  );
}

export default Cards;
