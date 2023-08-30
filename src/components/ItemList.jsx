import React from 'react';
import Item from './Item';



const ItemList = ({ productos, titulo}) => {
    return (
        <div className='ItemListContainer'>
            <h2 className='ItemListTitle'>{titulo}</h2>
            <div className="ItemContainer">
            {productos.map((prod) => < Item producto={prod} key={prod.id} />)}
            </div>
            
        </div>
    )
}

export default ItemList
