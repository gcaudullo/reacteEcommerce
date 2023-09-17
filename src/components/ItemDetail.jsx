import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount"
import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';


const ItemDetail = ({ item }) => {

  const { carrito, agregarAlCarrito } = useContext(CartContext);


  const [count, setCount] = useState(1)

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };
  const handleIncreaseCount = () => {
    if (count < item.stock) {
      setCount(prev => prev + 1);
    }
  };


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imagen} alt={item.alt} />
      <Card.Body >
        <Card.Title >{item.nombre}</Card.Title>
        <Card.Text >
          Categoría: {item.categoria}
        </Card.Text>
        <Card.Text>
          Precio: USD {item.precio}
        </Card.Text>
        <ItemCount
          count={count}
          handleDecreaseCount={handleDecreaseCount}
          handleIncreaseCount={handleIncreaseCount}
          handleAgregar={() => { agregarAlCarrito(item, count) }}
        />
      </Card.Body>
    </Card>
  )
}

export default ItemDetail