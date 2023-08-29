import Card from 'react-bootstrap/Card';


const ItemDetail = ({ item }) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.imagen} alt={item.alt}  />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>
          Categoría: {item.categoria}
          </Card.Text>
          <Card.Text>
          Precio: USD {item.precio}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default ItemDetail