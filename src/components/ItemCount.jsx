import React, { useState } from 'react'

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const handleDecreaseCount = () => {
        if (count >= 1) {
            setCount(prev => prev - 1);
        }
    };
    const handleIncreaseCount = () => {
        if (true) {
            setCount(prev => prev + 1);
        }
    };

    const onAdd = () => {
        alert(count)
    };

    return (
        <div className='itemCount'>
            <span onClick={handleDecreaseCount}>-</span>
            <span>{count}</span>
            <span onClick={handleIncreaseCount}>+</span>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount