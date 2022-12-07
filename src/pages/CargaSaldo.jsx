import React from "react";
import { Button } from "../components/Button";
import { Title } from "../components/Title";

export const CargaSaldo = () => {
  return (
    <>
      <div className="text-center mt-3">
        <Title size={"h1"}>Depositá dinero en tu cuenta</Title>
      </div>
      <div className=" d-flex flex-column flex-sm-row text-center  justify-content-center my-5 flex-wrap h-auto py-sm-5">
        <div className="col-8 col-sm-6 mb-sm-5 pb-sm-3">
          <Title size={"h4"}>Depositos rapidos</Title>
          <div className="d-flex flex-column justify-content-center mt-5 mb-5 pb-sm-5">
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
              <div className="d-flex gap-4">
                <button className="btn btn-secondary rounded-2 border border-secondary">
                  $1000
                </button>
                <button className="btn btn-secondary rounded-2 border border-secondary">
                  $2000
                </button>
              </div>
              <div className="d-flex gap-4">
                <button className="btn btn-secondary rounded-2 border border-secondary">
                  $5000
                </button>
                <button className="btn btn-secondary rounded-2 border border-secondary">
                  $10000
                </button>
              </div>
            </div>
          </div>
            <Button>Depositar</Button>
        </div>
        <div className="mt-4 mt-sm-0 col-8 col-sm-6 mb-sm-5 pb-sm-3">
          <div className="">
            <Title size={"h4"}>Deposito personalizado</Title>
          </div>
          <div className="d-flex flex-column align-items-center mb-5 pb-sm-5">
            <label className="text-secondary" htmlFor="">
              concepto
            </label>
            <input
              className=" border border-1 border-secondary opacity-50  rounded-1"
              type="text"
            />
            <label className="text-secondary mt-3" htmlFor="">
              importe
            </label>
            <input
              className=" border border-1 border-secondary opacity-50  rounded-1"
              type="text"
            />
          </div>
          <Button>Depositar</Button>
        </div>
      </div>
    </>
  );
};
