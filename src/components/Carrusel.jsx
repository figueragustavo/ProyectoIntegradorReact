import React from 'react';

function Carrusel() {
 
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg" className="d-block w-45" alt="Glass Onion">
      </img>
    </div>
    <div className="carousel-item">
      <img src="https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" className="d-block w-45" alt="Avatar">
      </img>
    </div>
    <div className="carousel-item">
      <img src="https://image.tmdb.org/t/p/w500/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg" className="d-block w-45" alt="Megan">
        </img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default Carrusel;