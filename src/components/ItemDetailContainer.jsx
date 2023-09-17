import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Container from 'react-bootstrap/Container';
import { doc , getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
       const docRef = doc(db, "productos", id);
       getDoc(docRef)
        .then((resp) => {
            setItem(
                {...resp.data(), id: resp.id}
            )
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