import Container from 'react-bootstrap/Container';
import { useForm } from 'react-hook-form'

const Contacto = () => {

  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data)
  }

  return (
    <Container>
      <h1 className='main-title'>Contacto</h1>
      <form className='formulario' onSubmit={handleSubmit(enviar)} >
        <input type="text" placeholder='Ingresá tu nombre' {...register("nombre")} />
        <input type="email" placeholder='Ingresá tu e-mail' {...register("email")} />
        <input type="phone" placeholder='Ingresá tu telefono' {...register("telefono")} />
        <textarea placeholder='Deja aquí tu mensaje' {...register("mensaje")} />
        <button className='enviar' type="submit">Enviar</button>
      </form>
    </Container>
  )
}

export default Contacto