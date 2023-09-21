import Container from 'react-bootstrap/Container';
import { useForm } from 'react-hook-form'

const Contacto = () => {

  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    // console.log(data)
  }

  return (
    <Container>
      <h1 className='main-title'>Contacto</h1>
      <p>
        ¡Gracias por su interés en OK Computers!
      </p>
      <p>Estamos aquí para responder a todas sus preguntas y brindarle la asistencia que necesita.
        Puede comunicarse con nosotros de varias maneras:
      </p>

      <h2>Formulario de Contacto</h2>
      <p>
        Por favor, utilice el formulario a continuación para ponerse en contacto con nosotros.
        Complete los campos con su nombre y apellido, dirección de correo electrónico, número de teléfono y dejanos tu mensaje con la consulta.
        Uno de nuestros representantes se comunicará con usted a la brevedad posible.
      </p>
      <form className='formulario' onSubmit={handleSubmit(enviar)} >
        <input type="text" placeholder='Ingresá tu nombre y apellido' {...register("nombre")} />
        <input type="email" placeholder='Ingresá tu e-mail' {...register("email")} />
        <input type="phone" placeholder='Ingresá tu telefono' {...register("telefono")} />
        <textarea placeholder='Deja aquí tu mensaje' {...register("mensaje")} />
        <button className='enviar' type="submit">Enviar</button>
      </form>

      <h2>Información de Contacto</h2>
      <p><b>Dirección de la Oficina:</b></p>
      <p>123 Calle Tecnológica</p>
      <p>Ciudad Tecnoville, TEC123</p>

      <p><b>Teléfono de Atención al Cliente:</b></p>
      <p>+123 456 7890</p>

      <p><b>Correo Electrónico de Atención al Cliente:</b></p>
      <p>info@okcomputers.com</p>

      <h2>Horario de Atención</h2>
      <p>Nuestro equipo de atención al cliente está disponible para ayudarlo de lunes a viernes, de 9:00 a.m. a 6:00 p.m. (hora local).
        Estamos comprometidos a brindarle respuestas rápidas y soluciones efectivas.
      </p>
    </Container >
  )
}

export default Contacto