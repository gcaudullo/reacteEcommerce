import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

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
                    <div key={prd.id}>
                        <h3>{prd.nombre}</h3>
                        <p>Cantidad: {prd.count}</p>
                        <p>Precio Unitario: {prd.precio}</p>
                        <p>Total: {prd.count * prd.precio}</p>
                    </div>
                ))
            }
            {
                carrito.length > 0 ?
                <>
                    <h2>Precio Total: ${totalCarrito()}</h2>
                    <button onClick={handleVaciar}>Vaciar</button>
                </>
                :
                <h2>Su carrito está vacío</h2>
            }

        </Container>
    )
}

export default Carrito