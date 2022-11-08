import React from "react";
import {ContactoContext} from "./Context/ContactoProvider"

function DummyComponent2() {
    const {dummy, setDummy}=React.useContext(ContactoContext);
    const mifuncion=()=>{
        setDummy("Josue")
    }
    return(
        <React.Fragment>
            <button onClick={mifuncion}>Pichale aqui</button>
        </React.Fragment>
    )
}

export default DummyComponent2;