import React from 'react'
import Container from 'react-bootstrap/Container';
import Carousels from './Carousels';

const Nosotros = () => {
    return (
        <Container>
            <h1 className="Title" > Nosotros</h1>
            <Carousels />
            <h2>Nuestra Historia</h2>
            <p>OK Computers nació de una pasión compartida por la tecnología y la visión de proporcionar a nuestros clientes
                una experiencia incomparable en el mundo de la informática y la electrónica. Fundada en 1995 por un grupo de entusiastas de la tecnología,
                nuestra empresa ha crecido y evolucionado constantemente a lo largo de los años.</p>
            <p> Desde nuestros humildes comienzos como una pequeña tienda de computadoras en el centro de la ciudad, hemos ampliado nuestro alcance y
                diversificado nuestro catálogo de productos. A lo largo de nuestra historia, hemos mantenido firmemente nuestro compromiso
                con la excelencia en servicio al cliente y la calidad de los productos que ofrecemos.</p>

            <h2>Representando las Mejores Marcas</h2>
            <p>En OK Computers, nos enorgullece representar algunas de las marcas más confiables y líderes en el mundo de la tecnología.
                Trabajamos en estrecha colaboración con fabricantes de renombre internacional para ofrecer a nuestros clientes una amplia
                gama de productos de alta calidad. Algunas de las marcas que representamos incluyen:</p>
            <p>
                <ul>
                    <li><b>TechMega: </b>Líder en laptops y computadoras de última generación.</li>
                    <li><b>ElectroTech: </b>Especialistas en electrodomésticos de vanguardia para el hogar.</li>
                    <li><b>MobileWave: </b>Ofreciendo una selección excepcional de teléfonos móviles y accesorios.</li>
                    <li><b>SoundMaster: </b>Expertos en equipos de audio y sistemas de entretenimiento para el hogar.</li>
                    <li><b>ComponentesTech: </b>Proveedores de componentes y accesorios esenciales para entusiastas de la computación.</li>
                    <li><b>GigaNet: </b>Soluciones de redes y conectividad de alta velocidad.</li>
                </ul>
                Nuestra dedicación a la calidad, la innovación y el servicio al cliente nos ha permitido ganarnos la confianza de clientes de todo el país
                a lo largo de los años. Estamos comprometidos a seguir creciendo y brindando soluciones tecnológicas excepcionales a nuestros clientes en el futuro.
            </p>
            <p>
                Gracias por confiar en OK Computers como su destino de confianza para todas sus necesidades tecnológicas.
                ¡Esperamos poder servirle y ofrecerle productos de calidad excepcional durante muchos años más!
            </p>
        </Container>
    )
}

export default Nosotros