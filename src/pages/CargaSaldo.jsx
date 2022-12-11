import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import alkemyApi from "../api/login";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import { useAuth } from "../hooks/useAuth";
import { useTransactions } from "../hooks/useTransactions";

export const CargaSaldo = () => {
  const { infoUsuario } = useAuth();

  useEffect(() => {
    infoUsuario();
  }, []);

  let today = new Date();
  today =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate(); // Returns the date in the format "Year-Month-Date" (e.g. "2021-6-21")
  const { createOperation } = useTransactions();
  const [transaction, setTransaction] = useState({
    amount: "",
    concept: "",
    date: today,
    type: "topup",
    accountId: 2,
    userId: 2,
    to_account_id: 5
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleCargaRapida = (e) => {
    const { name, value } = e.target;

    setTransaction({ ...transaction, [name]: value });
  };

  const deposit = async () => {
    const res = await createOperation(transaction, "topup");

    if (!res.error) {
      return Swal.fire({
        icon: "success",
        title: "Operación Realizada correctamente",
        text: "",
        footer: ""
      });
    }

    Swal.fire({
      icon: "error",
      title: res.error || "Algo falló, intente nuevamente mas tarde",
      footer: ""
    });
  };
  return (
    <>
      <div className="text-center mt-3">
        <Title size={"h1"}>Depositá dinero en tu cuenta</Title>
      </div>
      <div className=" d-flex flex-column flex-sm-row text-center  justify-content-center my-5 flex-wrap h-auto py-sm-5">
        <div className="col-8 col-sm-6 mb-sm-5  pb-sm-3">
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
