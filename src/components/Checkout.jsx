import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form';
import { Container } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");
    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext)
    const { register, handleSubmit} = useForm();

    const comprar = (data) => {
        if (!data.nombre || data.nombre.length < 3) {
            alert('El nombre es obligatorio y debe tener al menos 3 caracteres.');
            return;
        }

        if (!data.telefono) {
            alert('El teléfono es obligatorio.');
            return;
        }

        if (!data.email || !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(data.email)) {
            alert('Ingresa un correo electrónico válido.');
            return;
        }

        if (data.email !== data.email2) {
            alert('Los e-mails ingresados no coinciden');
            return;
        }

        
        const pedido = {
            cliente: data,
            productos: carrito,
            total: totalCarrito()
        }
        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                vaciarCarrito()
            })
    }

    if (pedidoId) {
        return (
            <Container>
                <h1 className='main-title'>Muchas gracias por tu compra!!</h1>
                <p>Tu numero de pedido es {pedidoId} </p>
            </Container>
        )
    }

    return (
        <Container>
            <h1 className='main-title'>Finalizar Compra</h1>
            <form className='formulario' onSubmit={handleSubmit(comprar)} >
                <input type="text" placeholder='Ingresá tu nombre y apellido' {...register("nombre")} />
                <input type="phone" placeholder='Ingresá tu telefono' {...register("telefono")} />
                <input type="email" placeholder='Ingresá tu e-mail' {...register("email")} />
                <input type="email" placeholder='Vuelve a Ingresar tu e-mail' {...register("email2")} />
                <button className='enviar' type="submit">Realizar Compra</button>
            </form>
        </Container>
    )
}

export default Checkout