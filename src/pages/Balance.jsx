import React, { useEffect } from "react";
import { Title } from "../components/Title";
import { TableTransaction } from "../components/TableTransaction";
import { useSelector } from "react-redux";
import { useTransactions } from "../hooks/useTransactions";

export const Balance = () => {
  const { getTransactions } = useTransactions();
  useEffect(() => {
    getTransactions();
  }, []);

  const operations = useSelector((state) => state.transactions.transactions);
  const { balance, payments, topups } = useSelector((state) => state.user.acquisition);

  return (
    <>
      <div className="container-fluid d-flex justify-content-center flex-column">
        <div className="text-center m-3">
          <Title size={"h1"}>Balance</Title>
        </div>
        <div className="d-flex justify-content-evenly">
          <div className="col-lg-2">
            <div className="card">
              <div className="card-body text-center">

                <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-abstracto-renta-imponible_335657-3672.jpg?w=826&t=st=1670355437~exp=1670356037~hmac=1984293bcda7a9adbc4f0d50820b41c82b4678b88d9ac3c02ca599069b563427" className="rounded-circle" width="150" height="150" />
                <div className="card-title mt-2 mb-1"></div>
                <span className="fs-2 mb-3 font-weight-bold">Ingresos</span>
                <p className="mb-3 mt-3">$ {topups}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="card">
              <div className="card-body text-center">

                <img src="https://img.freepik.com/vector-gratis/calculo-gastos-planificacion-deseos-lista-compras-resumen-compras-cesta-supermercado-internet-elemento-diseno-creativo-lista-deseos-comprador_335657-1631.jpg?w=826&t=st=1670355533~exp=1670356133~hmac=e2962589312c7c2431eaa3208d3acb41ff2ffbb921472a2e922e7d1c6d19b5fd" className="rounded-circle" width="150" height="150" />
                <div className="card-title mt-2 mb-1"></div>
                <span className="fs-2 mb-3 font-weight-bold">Balance</span>
                <p className="mb-3 mt-3">$ {balance}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
              <div className="card-body text-center">

                <img src="https://img.freepik.com/vector-premium/man-riding-on-infographic-arrow-board-with-diagram-pie-charts-arrows-growth-income-analytics-layout-business-data-analysis-concept-flat-style-boy-in-blue-tshirt-on-white-background_774778-54.jpg" className="rounded-circle" width="150" height="150" />
                <div className="card-title mt-2 mb-1"></div>
                <span className="fs-2 mb-3 font-weight-bold">Pagos</span>
                <p className="mb-3 mt-3">$ {payments}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-3 block">
        <Title size={"h3"}>Ultimos movimientos</Title>
      </div>
      {operations && operations.length !== 0
        ? <TableTransaction operations={operations} />
        : <div className="page mx-auto text-center w-auto">
          <img className="rounded-circle" width="300" height="300" src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=826&t=st=1670198889~exp=1670199489~hmac=7138bd0b752b975b0a174529054e4a7919f58781eea7663f77a983f59482c240" />
          <h3>No hay movimientos</h3>
        </div>
      }

    </>
  );
};
