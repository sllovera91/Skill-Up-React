import React from 'react';
import { handleDate } from '../helper/helper';

export const Transaction = ({ concept, amount, date, type }) => {
  return (
    <tr>
        <td scope="row">{concept}</td>
    <td>
      ${amount}
      </td>
    <td>
        <span className={`badge ${type === 'topup' ? 'bg-success' : 'bg-danger'}`}>{type}</span>
      </td>
    <td>
      <p className="text-secondary">{handleDate(date)}</p>
      </td>
  </tr>
  );
};
