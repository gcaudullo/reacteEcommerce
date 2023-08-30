import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { solicitarItemPorId } from '../helpers/solicitoProductos';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        solicitarItemPorId(Number(id))
            .then((res) => {
                setItem(res)
            })
    }, [id])
    



    return (
        <div>
            <h1>Detalle</h1>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer