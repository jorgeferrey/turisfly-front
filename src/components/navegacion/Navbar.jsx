import React from 'react';
import {Link} from "react-router-dom";
import '../paginas/Style.css';

const Navbar = () => {
  return (
    <div className="contenedor-nav-bar">

      <nav className="top-nav">
      <ul>
          <li className="nav-item">
            <Link className="nav-link" style={{color:"white"}} to="/Inicio">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" style={{color:"white"}} to="/Ofertas">Ofertas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" style={{color:"white"}}to="/Registros">Registros</Link>
          </li>
      </ul>   
     
      </nav>
    </div>
  )
}

export default Navbar
