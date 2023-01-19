const Image = () => {
    const { id } = useParams();
    const movies = useContext(AppContext);
  
    const movie = movies.find((movie) => movie.id == id);
  
    return (
      <>
        <img>{movie.poster_path}</img>
        <Link to="/">Volver</Link>
      </>
    );
  };
  
  export default Image;