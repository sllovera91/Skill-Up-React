import React from "react";
import { useLocation } from "react-router-dom";
import { Transaction } from "./Transaction";

export const TableTransaction = ({ operations }) => {
  const { pathname } = useLocation();

  return (
    <table className="table w-75 shadow-lg p-3 mb-5 mt-5 bg-white rounded mx-auto bg-white">
      <thead className="bg-light">
        <tr>
          <th>Concepto</th>
          <th>Importe</th>
          <th>Tipo</th>
          <th>Fecha</th>
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
  );
};
