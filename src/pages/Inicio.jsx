import React from 'react';
import { Title } from '../components/Title';
import foto from '../assets/images/imag1.png';
import 'animate.css';

export const Inicio = () => {
  return (
    <>
    <div className="container-fluid d-flex justify-content-center flex-column animate__animated animate__fadeIn">
      <div className="text-center m-3">
        <div className='landiv'>
          <div className='landiv2'>
          <h3>Gracias por formar parte del banco del futuro</h3>
        <Title size={'h1'}>Ya sos parte de AlkyBank!</Title>
          <h3>Vas a poder acceder a un monton de experiencias y descuentos que te van a permitir no quedarte con ganas de nada</h3>
          </div>
          <div>
        <img className="landing" src={foto} />
          </div>
        </div>
      </div>
    </div>
        <div className='landiv3'>
          <div className='cardLand'> <h4>Gratis de por vida</h4> <p>Somos transparentes, no hay letra chica.</p></div>
          <div className='cardLand'> <h4>Tenela en cualquier parte</h4> <p>Somos transparentes, no hay letra chica.</p></div>
          <div className='cardLand'> <h4>El respaldo de Alkemy</h4><p>Somos transparentes, no hay letra chica.</p> </div>
        </div>
        </>
  );
};
