import { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";


function Favoritos (){

    const {state} = useLocation();
    const favoritas = useContext(AppContext)
    console.log(state);
  
    useEffect(() =>{
        axios
        .get(`https://api.themoviedb.org/3/movie/${state}?api_key=122daef07a16845ab90c2b8564879474`)
        .then((response) => {
            const m = response.data.results;
            addMovie(m);
            console.log(favoritas);
        })
        .catch((error) => console.error(error));
    },[])
    

    const addMovie = (movie) => {
        favoritas.push(movie)
        localStorage.setItem("favoritas", favoritas)
    }
}

export default Favoritos;