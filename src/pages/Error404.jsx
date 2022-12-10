import React from 'react';
import { Button } from '../components/Button';
import { Title } from '../components/Title';
import { Link } from 'react-router-dom';

export const Error404 = () => {
  return (
    <div className="Content text-center d-flex align-items-center justify-content-center">
      <div className="text-center">
        <Title size="h1">404</Title>
        <Title size="h2">Página no encontrada</Title>

        <Link className="nav-link" to="/"><Button variant="btn btn-primary">Volver al inicio</Button></Link>
      </div>
    </div>
  );
};
