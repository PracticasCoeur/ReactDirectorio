import React from "react";
import {ContactoContext} from "./../Context/ContactoProvider";

function AgregarAmigo(params){
    const abreModal=()=>{
        console.log("Si jalo");
    }
    return(
        <button onClick={abreModal}>+Amigo</button>
    )
}

export default AgregarAmigo;