import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(carritoInicial)

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([carritoInicial]);

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

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])


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