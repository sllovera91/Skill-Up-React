import React, { useEffect } from "react";
import { Title } from "../components/Title";
import "animate.css";
import { useAuth } from "../hooks/useAuth"; ;

export const Inicio = () => {
  const { Login, infoUsuario } = useAuth();

  useEffect(() => {
    infoUsuario();
  }, [Login]);

  return (
    <div className="container-fluid d-flex justify-content-center flex-column">
      <div className="text-center m-3">
        <Title size={"h1"}>Inicio</Title>
      </div>
    </div>
  );
};
