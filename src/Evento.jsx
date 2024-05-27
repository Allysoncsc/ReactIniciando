import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {shirt} from "@fortawesome/free-solid-svg-icons"
import { faAnchorLock, faCoffee, faPaintBrush, faShirt } from '@fortawesome/free-solid-svg-icons'


const Evento = () =>{
    function handleClick(event){
        alert('Comprou: '+ event.target.innerText);
    }

    return(
        <div>
            <button onClick={handleClick}><FontAwesomeIcon icon={faShirt}/> Camisa</button>
            <button onClick={handleClick}><FontAwesomeIcon icon={faPaintBrush}/>Calça</button>
            {/* <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon={faAnchorLock} /> */}
        </div>
        
    );
};

export default Evento;
