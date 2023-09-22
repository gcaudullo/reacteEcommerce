import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount"
import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'


const ItemDetail = ({ item }) => {

  const { agregarAlCarrito } = useContext(CartContext);
  const [count, setCount] = useState(1)
  const navigate = useNavigate();

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
  if (!item.nombre){
    return(<p>Producto no existente en nuestra base de Datos, verifique Id de Producto</p>)
  }

  return (
    <Card style={{ width: '30rem', alignItems: 'center'}}>
      <Card.Img style={{ width: '18rem' }} variant="top" src={item.imagen} alt={item.alt} />
      <Card.Body >
        <Card.Title >{item.nombre}</Card.Title>
        <Card.Text >
          {item.descripcion}
        </Card.Text>
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
        <button className='volver' onClick={() => navigate(-1)}>Volver</button>
      </Card.Body>
      <ToastContainer />
    </Card>
    
  )
}

export default ItemDetail