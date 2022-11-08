import React from "react";
import "./Contacto.css";

function Contacto(props){
    function miFuncion(){
        props.borrarAmigo();
    }
    return(
        <div className="contenedorlista">
            <h2>{props.nombre}</h2>
            <p>
                {props.telefono} - {props.correo}
            </p>
            <button className="eliminar" onClick={miFuncion}>Eliminar</button>
        </div>
    );
}


export default Contacto;