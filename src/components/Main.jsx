import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Movies from "./Movies";
import Carrusel from "./Carrusel";


const Main = () => {

    const movies  = useContext(AppContext);
    const url = "https://image.tmdb.org/t/p/w500";

    return ( 
        <main>
            <Carrusel />
            <h1 className="text-center">Películas</h1>
            <Movies />
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