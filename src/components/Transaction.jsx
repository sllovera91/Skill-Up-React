import React from "react";
import { handleDate } from "../helper/helper";

export const Transaction = ({ concept, amount, date, type }) => {
  return (
    <tr>
    <td>
      <div className="d-flex align-items-center">
        <div className="ms-3">
        <p className="text-secondary">{concept}</p>
        </div>
      </div>
    </td>
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
