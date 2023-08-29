import { useState, useEffect } from 'react';
import { solicitoProductos } from '../helpers/solicitoProductos';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

export function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoryId;
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
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    );
}