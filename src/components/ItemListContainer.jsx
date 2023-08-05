import React from 'react';

export function ItemListContainer (props){
    return(
        //la prop debe ser greeting y muestra el mensaje dentro del contenedor con el styling integrado.
        //importarlo desde App.js y abajo de NavBar.js
        <div className='ItemListContainer'>{props.greetings}</div>
    );
}