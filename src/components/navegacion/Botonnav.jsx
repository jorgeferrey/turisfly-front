import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Botonnav = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/ofertas");
  };  
  return (

        <div className="boton-nav">
          <p>
            <button style={{ backgroundColor: "orange" }} onClick={handleClick}>Descubre el Mundo!!!</button> 
          </p>
        </div>
        
  )
}

export default Botonnav
