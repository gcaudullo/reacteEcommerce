import { createContext, useState } from "react";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (item, count) => {
        const itemAgregado = { ...item, count };
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)

        if (estaEnElCarrito) {
            estaEnElCarrito.count = estaEnElCarrito.count + count;
        } else {
            nuevoCarrito.push(itemAgregado)
        }
        setCarrito(nuevoCarrito);
    };

    const cantPrdEnCarrito = () => {
        return carrito.reduce((acc, prd) => acc + prd.count, 0)
    }

    const totalCarrito = () => {
        return carrito.reduce((acc, prd) => acc + prd.precio * prd.count, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    return (< CartContext.Provider value={{
        carrito,
        agregarAlCarrito,
        cantPrdEnCarrito,
        totalCarrito,
        vaciarCarrito
    }}>
        {children}
    </CartContext.Provider>)
}