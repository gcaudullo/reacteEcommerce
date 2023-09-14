import React, { useContext } from 'react';
import carrito from "../assets/carrito.png"
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export function CartWidget() {

    const { cantPrdEnCarrito } = useContext(CartContext);

    return (
        <>
            <Link className='nav-link' to="/carrito">
                <img className='carrito' src={carrito} alt="carrito" />
                <span className='cantPRD'>{cantPrdEnCarrito()}</span>
            </Link>
        </>
    );
}