import React from "react";
import { handleConcept, handleDate } from "../helper/helper";

export const Transaction = ({ concept, amount, date, type }) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="col-12">
        <td className="text-secondary">{handleConcept(concept)}</td>
      </div>
      <div className="col-3 ms-3">{<td>${amount}</td>}</div>
      <div className="col-2 ps-4 d-flex justify-content-center">
        <td>
          <span className={`badge ${type === "topup" ? "bg-success" : "bg-danger"}`}>{type}</span>
        </td>
      </div>
      <div className="col-4 ms-4 d-flex justify-content-end">
        <td>{handleDate(date)}</td>
      </div>
    </div>
  );
};
