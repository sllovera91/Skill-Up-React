import React from "react";
import { handleDate } from "../helper/helper";

export const Transaction = ({ concept, amount, date, type }) => {
  return (
    <tr>
    <div className="d-flex justify-content-between">
      <div className="col-12">
        <td className="text-secondary">{concept}</td>
      </div>
    </div>
    <td>
      <p className="text-secondary">${amount}</p>
      </td>
    <td>
      <p className="text-secondary">
        <span className={`badge ${type === "topup" ? "bg-success" : "bg-danger"}`}>{type}</span>
      </p>
      </td>
    <td>
      <p className="text-secondary">{handleDate(date)}</p>
      </td>
  </tr>
  );
};
