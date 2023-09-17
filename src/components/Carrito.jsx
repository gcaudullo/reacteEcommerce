import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {
    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext)
    
    const handleVaciar = () => {
        vaciarCarrito()
    }

    return (
        <Container>
            <h1 className='main-title'>Carrito</h1>

            {
                carrito.map((prd) => (
                    <div className='map-productos' key={prd.id}>
                        <p>{prd.nombre}</p>
                        <p>Cantidad: {prd.count}</p>
                        <p>Precio Unitario: {prd.precio}</p>
                        <p>Total: {prd.count * prd.precio}</p>
                    </div>
                ))
            }
            {
                carrito.length > 0 ?
                <div className='botones-total'>
                    <h2>Precio Total: ${totalCarrito()}</h2>
                    <button className='btn btn-primary' onClick={handleVaciar}>Vaciar Carrito</button>
                    <button className='btn btn-primary'>< Link to="/checkout">Finalizar Compra</Link></button>
                </div>
                :
                <h2>Su carrito está vacío</h2>
            }

        </Container>
    )
}

export default Carrito