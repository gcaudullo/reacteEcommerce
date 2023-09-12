import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { solicitarItemPorId } from '../helpers/solicitoProductos';
import ItemDetail from './ItemDetail';
import Container from 'react-bootstrap/Container';


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
        <Container>
            <h1>Detalle</h1>
            {item && <ItemDetail item={item} />}
        </Container>
    )
}

export default ItemDetailContainer