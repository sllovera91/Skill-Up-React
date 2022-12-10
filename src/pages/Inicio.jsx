import React from "react";
import { Title } from "../components/Title";
import "animate.css";

export const Inicio = () => {
  return (
    <div className="container-fluid d-flex justify-content-center flex-column animate__animated animate__fadeIn">
      <div className="text-center m-3">
        <Title size={"h1"}>Inicio</Title>
      </div>
    </div>
  );
};
