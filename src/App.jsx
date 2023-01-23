import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const App = () => {

    const movies  = useContext(AppContext);
    console.log("main")

    return ( 
        <div>
            <h1>Peliculas</h1>
            <ul>
                {movies.map((movie) => (
                    <li> {movie.original_title}</li>
                ))}
            </ul>
        </div>
        

    );
}

export default App;