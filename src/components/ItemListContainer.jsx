import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from '../firebase/config';

export function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Loading...");
    const categoria = useParams().id;


    useEffect(() => {
        const productosRef = collection(db, "productos");
        
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;
        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })

            if (categoria) {
                setTitulo(categoria);
            } else {
                setTitulo("Productos");
            }

    }, [categoria])



    return (
        <Container>
            <ItemList productos={productos} titulo={titulo} />
        </Container>
    );
}