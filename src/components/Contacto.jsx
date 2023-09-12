import React from 'react'
import Container from 'react-bootstrap/Container';

const Contacto = () => {
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Enviado")
}

  return (
    <Container>
      <h1 className='main-title'>Contacto</h1>
      <form className='formulario' onSubmit={handleSubmit}>
        <input type="text" name="nombre" id="" placeholder='Ingresá tu nombre' />
        <input type="email" name="email" id="" placeholder='Ingresá tu e-mail' />
        <input type="phone" name="telefono" id="" placeholder='Ingresá tu telefono' />
        <button className='enviar' type="submit">Enviar</button>
      </form>
    </Container>
  )
}

export default Contacto