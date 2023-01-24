import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { BiCameraMovie } from 'react-icons/bi';
import { GiPopcorn } from 'react-icons/gi';

const Nav = () => {
    return (
        
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white-50" href="#"> <GiPopcorn/> Blockbuster </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white-50" aria-current="page" href="#"><BiCameraMovie/> Películas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white-50" aria-current="page" href="#"><FiHeart/> Favoritos</a>
                            </li>
                           
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search"/>
                                <button className="btn btn-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        
    )
}

export default Nav;