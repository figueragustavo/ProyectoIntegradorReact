import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Cards from "./Cards";
import Carrusel from "./Carrusel";


const Main = () => {

    const movies  = useContext(AppContext);
    const url = "https://image.tmdb.org/t/p/w500";

    return ( 
        <main>
            <Carrusel />
            <h1 className="text-center">Películas</h1>
            <Cards />
            {/*<ul>
                {movies.map((movie) => (



                    <li key={movie.id}> {movie.original_title}
                    <p>ID: {movie.id}</p>
                    <img src= {url+movie.poster_path} alt="" />
                    </li>
                ))}
                </ul> */}
        </main>
        

    );
}

export default Main;