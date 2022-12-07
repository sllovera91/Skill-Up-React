import React from "react";
import { Title } from "../components/Title";

export const EnvioDinero = () => {
  return (
    <div className=" d-flex flex-column text-center justify-content-center my-5 align-items-center flex-wrap">
      <Title size={"h1"}>Transferi dinero a tus amigos</Title>
      <div className="d-flex row py-5 my-4 col-12 flex-wrap justify-content-around">
        <div className="d-flex  flex-column align-items-center  my-4 col-8 col-md-4 py-3 rounded-2  border border-secondary border-opacity-25 justify-content-center" >
          <Title size={"h4"}>Transferir con ID de cuenta</Title>
          <label className="text-center mt-4 text-secondary" htmlFor="">
            ID de la cuenta
          </label>
          <input
            className=" my-4 border border-1 border-secondary opacity-50  rounded-1 "
            type="number"
            name=""
            id=""
          />
          <label className="text-center text-secondary" htmlFor="">
            importe a transferir
          </label>
          <input
            className=" my-4 border border-1 border-secondary opacity-50  rounded-1 "
            type="number"
            name=""
            id=""
          />
          <div className="">
            <button className="btn btn-primary ms-auto">Transferir</button>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center  my-4 col-8 col-md-4 py-3 rounded-2  border border-secondary border-opacity-25  justify-content-center" >
          <Title size={"h4"}>Transferir con mail</Title>
          <label className="text-center mt-4 text-secondary" htmlFor="">
            Mail del usuario
          </label>
          <input
            className=" my-4 border border-1 border-secondary opacity-50  rounded-1 "
            type="email"
            name=""
            id=""
          />
          <label className="text-center text-secondary" htmlFor="">
            importe a transferir
          </label>
          <input
            className=" my-4 border border-1 border-secondary opacity-50  rounded-1 "
            type="number"
            name=""
            id=""
          />
          <div className="">
            <button className="btn btn-primary ms-auto">Transferir</button>
          </div>
        </div>
      </div>
    </div>
  );
};
