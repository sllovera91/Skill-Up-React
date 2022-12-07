import React from "react";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import { Link } from "react-router-dom";
/* import "animate.css";
 */
  export const Inicio = () => {
  return (
    <div className="Content text-center d-flex align-items-center justify-content-center mt-5 animate__animated animate__bounce">
    <div className="text-center">
        <Title size="h1">Inicio</Title>
        <Title size="h2">Página no encontrada</Title>

        <Link className="nav-link" to="/"><Button variant="btn btn-primary">Volver al inicio</Button></Link>
      </div>
    </div>
  );
};
