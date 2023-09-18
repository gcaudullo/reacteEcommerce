import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (item, count) => {
        const itemAgregado = { ...item, count };
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)

        toast('Producto agregado al carrito!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

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