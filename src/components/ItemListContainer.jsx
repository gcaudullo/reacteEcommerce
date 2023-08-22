import data from "../data/mock_data.json"
import { useState, useEffect } from 'react';

export function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    
    const solicitoProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }

    useEffect(() => {
        solicitoProductos()
            .then((res) => {
                setProductos(res);
            })
    }, [])



    return (
        <div>
            {
                productos.length > 0 &&
                productos.map((productos) => {
                    return (
                        <div key={productos.id} >
                            <p> {productos.id} </p>
                            <img src={productos.avatar} alt={productos.first_name} />
                            <h2>{productos.first_name + " " + productos.last_name} </h2>
                            <p>{productos.email}</p>
                        </div>
                    )
                })

            }
        </div>
        //la prop debe ser greeting y muestra el mensaje dentro del contenedor con el styling integrado.
        //importarlo desde App.js y abajo de NavBar.js
        // <div className='ItemListContainer'>{props.greetings}</div>
    );
}