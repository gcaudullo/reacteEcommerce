import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({ producto }) => {
  return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.imagen} alt={producto.alt}  />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
          Categoría: {producto.categoria}
          </Card.Text>
          <Card.Text>
          Precio: USD {producto.precio}
          </Card.Text>
          <Link className="btn btn-primary" to={`/Item/${producto.id}`}>Ver más</Link>
        </Card.Body>
      </Card>
    )
}

export default Item