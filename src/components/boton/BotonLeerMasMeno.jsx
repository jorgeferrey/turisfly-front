import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const BotonLeerMasMeno = () => {

  const [showFullText, setShowFullText] = useState(false);
  
    return (
       
            <div className="boton-leer-mas-meno">    
                <div className="tarjeta-articulo">
                    {showFullText ? (
                    <p>{"Viajar no solo te lleva a lugares increible, sino que te transforma como persona. Expande tu mente, abre tu corazón y te llena de experiencias únicas. Es la mejor inversión en ti mismo, un reagalo invaluable que te enriquece para siempre.          Descubre culturas, conoce gente, prueba sabores, desafía tu rutina y aprende a adaptarte. Cada viaje te abre un mundo nuevo y te acerca a la mejor versión de ti mismo. ¡Atrévete a explorar y descubrir la magia de viajar!"}</p>
                    ) : (
                    <p>{"Viajar no solo te lleva a lugares increible, sino que te transforma como persona."}</p>
                    )}
                    <button style={{ backgroundColor: "blueviolet" }} onClick={() => setShowFullText(!showFullText)}>
                        {showFullText ? "Leer menos" : "Leer más"}
                    </button>
                </div>
            </div>
            

    )
}

export default BotonLeerMasMeno
