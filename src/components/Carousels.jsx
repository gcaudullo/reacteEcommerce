import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carousels = () => {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carousel"
                    src="https://firebasestorage.googleapis.com/v0/b/okcomputers-12a2c.appspot.com/o/software-developer-6521720_1920.jpg?alt=media&token=ec0f19d2-a685-45d3-91d0-085e3d75c301"
                    alt="Desarrollador de software"
                />
                <Carousel.Caption>
                    <h5 className='h5-txt-carousel'>Contamos con un gran equipo para satisfacer tus necesidades</h5>
                    <p className='p-txt-carousel'>Nuestra experiencia y dedicación son la fuerza impulsora detrás de OK Computers.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carousel"
                    src="https://firebasestorage.googleapis.com/v0/b/okcomputers-12a2c.appspot.com/o/computer-2565478_1920.jpg?alt=media&token=cca4b337-ca8d-462d-8089-244bd15325b4"
                    alt="Oficina con all in one marca Mac."
                />
                <Carousel.Caption>
                    <h5 className='h5-txt-carousel'>Productos de calidad para equipar tu oficina</h5>
                    <p className='p-txt-carousel'>Equipos de alto rendimiento y calidad.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carousel"
                    src="https://firebasestorage.googleapis.com/v0/b/okcomputers-12a2c.appspot.com/o/office-972624_1920.jpg?alt=media&token=44e3164a-e782-456a-9552-78c1a4ca7744"
                    alt="Computadora con capucchino y tecnologìa a su alrededor"
                />
                <Carousel.Caption>
                    <h5 className='h5-txt-carousel'>La mayor variedad de computadores portatiles de todo el país.</h5>
                    <p className='p-txt-carousel'>
                        Ven a visitarnos! Seguro te vas a sorprender!
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels