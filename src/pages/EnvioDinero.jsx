import React from "react";
import { Title } from "../components/Title";

export const EnvioDinero = () => {
  return (
    <div className=" d-flex flex-column justify-content-center my-5 align-items-center">
      <Title size={"h1"}>Transferí dinero a tus amigos</Title>
      <div className="d-flex row py-5 my-4 col-12">
        <div className="d-flex flex-column align-items-center my-5 col-6 justify-content-center">
          <Title size={"h4"}>Transferir por ID de cuenta</Title>
          <label className="text-center" htmlFor="">ID de la cuenta</label>
          <input className=" my-4 border border-1 border-secondary opacity-50  rounded-1 " type="number" name="" id="" />
          <label className="text-center" htmlFor="">importe a transferir</label>
          <input className=" my-4 border border-1 border-secondary opacity-50  rounded-1 " type="number" name="" id="" />
        </div>
        <div className="d-flex flex-column align-items-center my-5 col-6 justify-content-center">
          <Title size={"h4"}>Transferir con email</Title>
          <label className="text-center" htmlFor="">Mail del usuario</label>
          <input className=" my-4 border border-1 border-secondary opacity-50  rounded-1 " type="number" name="" id="" />
          <label className="text-center" htmlFor="">importe a transferir</label>
          <input className=" my-4 border border-1 border-secondary opacity-50  rounded-1 " type="number" name="" id="" />
        </div>
      </div>
    </div>
  );
};
