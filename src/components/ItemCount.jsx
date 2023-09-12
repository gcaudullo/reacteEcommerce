

const ItemCount = ({ count, handleDecreaseCount, handleIncreaseCount, handleAgregar }) => {

    return (
        <>
            <div className='item-count'>
                <button onClick={handleDecreaseCount}>-</button>
                <span>{count}</span>
                <button onClick={handleIncreaseCount}>+</button>
            </div>
            <button className='agregar-al-carrito' onClick={handleAgregar}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount