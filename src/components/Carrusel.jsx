import React from 'react';
import blockbuster from '../blockbuster.webp';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Carrusel() {
 
  return (
    <div className="row mx-0 my-5 gap-4 justify-content-center"  >
      <img src={blockbuster} width="300" height="500" alt="BLOCKBUSTER">
      </img>
   </div>
  )
  
}

export default Carrusel;