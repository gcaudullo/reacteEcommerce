import { useState, useEffect } from 'react';
import { solicitoProductos } from '../helpers/solicitoProductos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Loading...");
    const categoria = useParams().id;
    console.log(categoria);

    useEffect(() => {
        solicitoProductos()
            .then((res) => {
                if (categoria) {
                    setProductos(res.filter((prod) => prod.categoria === categoria));
                    setTitulo(categoria);
                } else {
                    setProductos(res);
                    setTitulo("Productos");
                }
            })
    }, [categoria])



    return (
        <Container>
            <ItemList productos={productos} titulo={titulo} />
        </Container>
    );
}