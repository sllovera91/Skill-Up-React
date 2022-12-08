import React from "react";
import { useLocation } from "react-router-dom";
import { Transaction } from "./Transaction";

export const TableTransaction = ({ operations }) => {
  const { pathname } = useLocation();

  return (
    <section className="intro ">
      <div className="gradient-custom-1 h-100">
        <div className="mask d-flex align-items-center h-100  ">
          <div className="container bg-white">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="table-responsive"></div>
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>CONCEPTO</th>
                      <th>IMPORTE</th>
                      <th>TIPO</th>
                      <th>FECHA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      pathname.toLocaleLowerCase() === "/balance"
                        ? operations.slice(0, 4).map(({ concept, amount, date, type }, index) =>
                          <Transaction key={index} concept={concept} amount={amount} date={date} type={type} />)
                        : operations.map(({ concept, amount, date, type }, index) =>
                          <Transaction key={index} concept={concept} amount={amount} date={date} type={type} />)
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};
