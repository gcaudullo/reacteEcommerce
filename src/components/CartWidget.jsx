import React from 'react';
import carrito from "../assets/carrito.png"

export function CartWidget (){
    return(
        //incluir un ícono y una notificación con un código hardcodeado
        //Agregarlo adentro de NavBar y agregar estilos con bootstrap/materialize
        <>
        <img className='carrito' src={ carrito } alt="carrito" />
        <span className='cantPRD'>0</span>
        </>
    );
}