import React from 'react';
import Item from './Item';



const ItemList = ({ productos, titulo}) => {
    return (
        <div className='Productos'>
            <h2>{titulo}</h2>
            {productos.map((prod) => < Item producto={prod} key={prod.id} />)}
        </div>
    )
}

export default ItemList
