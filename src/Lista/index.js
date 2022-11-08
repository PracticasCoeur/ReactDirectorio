import React from "react";
import "./Lista.css";

function Lista(props){

    return(
        <React.Fragment>
            <h1 className="milista">Mi Lista</h1>
            {props.children}
        </React.Fragment>
    );
}

export default Lista;