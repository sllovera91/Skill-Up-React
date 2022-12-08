/* eslint-disable comma-dangle */
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import alkemyApi from "../api/login";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import { useTransactions } from "../hooks/useTransactions";

export const CargaSaldo = () => {
  let today = new Date();
  today =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate(); // Returns the date in the format "Year-Month-Date" (e.g. "2021-6-21")
  const { Autorizacion } = useTransactions();
  const [usuData, setUsuData] = useState("");
  const traerDatosUsu = async () => {
    try {
      const response = await alkemyApi.get(
        "/auth/me",
        Autorizacion,
        Autorizacion
      );
      console.log(response.data);
      setUsuData(response.data.id);
    } catch (error) {
      console.log("no anduvo");
    }
  };
  const [transaction, setTransaction] = useState({
    amount: "",
    concept: "",
    date: today,
    type: "topup",
    accountId: 1,
    userId: usuData,
    to_account_id: 5,
  });

  useEffect(() => {
    traerDatosUsu();
    console.log(usuData);
  }, [transaction]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
    console.log(usuData);
  };

  const handleCargaRapida = (e) => {
    const { name, value } = e.target;

    setTransaction({ ...transaction, [name]: value });
  };

 /*  useEffect(() => {
    console.log(transaction);
  }, [transaction]); */

  const deposit = async () => {
    try {
      const response = await alkemyApi.post(
        "/transactions",
        transaction,
        Autorizacion
      );
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "Operación Realizada correctamente",
        text: "",
        footer: "",
      });
    } catch (error) {
      console.log("no anduvo");

      Swal.fire({
        icon: "error",
        title: "Algo falló, intente nuevamente mas tarde",
        text: "",
        footer: "",
      });
    }
  };
  return (
    <>
    <div className="container-fluid d-flex justify-content-center flex-column">
      <div className="text-center m-3">
        <Title size={"h1"}>Carga Salgo</Title>
      </div>
    </div>
      <div className=" d-flex flex-column flex-sm-row text-center  justify-content-center my-5 flex-wrap h-auto py-sm-5">
        <div className="col-8 col-sm-6 mb-sm-5 pb-sm-3">
          <Title size={"h4"}>Depositos rapidos</Title>
          <div className="d-flex flex-column justify-content-center mt-5 mb-5 pb-sm-5">
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
              <div className="d-flex gap-4">
                <button
                  name="amount"
                  value="1000"
                  onClick={handleCargaRapida}
                  className="btn btn-secondary rounded-2 border border-secondary"
                >
                  $1000
                </button>
                <button
                  name="amount"
                  value="2000"
                  onClick={handleCargaRapida}
                  className="btn btn-secondary rounded-2 border border-secondary"
                >
                  $2000
                </button>
              </div>
              <div className="d-flex gap-4">
                <button
                  name="amount"
                  value="5000"
                  onClick={handleCargaRapida}
                  className="btn btn-secondary rounded-2 border border-secondary"
                >
                  $5000
                </button>
                <button
                  name="amount"
                  value="10000"
                  onClick={handleCargaRapida}
                  className="btn btn-secondary rounded-2 border border-secondary"
                >
                  $10000
                </button>
              </div>
            </div>
          </div>
          <Button action={deposit}>Depositar</Button>
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
              onChange={handleInput}
              className=" border border-1 border-secondary opacity-50  rounded-1"
              type="text"
              name="concept"
            />
            <label className="text-secondary mt-3" htmlFor="">
              importe
            </label>
            <input
              onChange={handleInput}
              className=" border border-1 border-secondary opacity-50  rounded-1"
              type="text"
              name="amount"
            />
          </div>
          <Button action={deposit}>Depositar</Button>
        </div>
      </div>
    </>
  );
};
