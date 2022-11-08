import React from "react";
import "./Busqueda.css";
import {ContactoContext} from "./../Context/ContactoProvider";

function Busqueda(props){

    let {valorBusqueda, setValorBusqueda}=React.useContext(ContactoContext);
    
    function actualizarTexto(event){
        console.log(event.target.value);
        setValorBusqueda(event.target.value);
    }

    return(
        <div className="contenedor">
            <input onChange={actualizarTexto}
            value={valorBusqueda}></input>

        </div>
    );
}

export default Busqueda;


