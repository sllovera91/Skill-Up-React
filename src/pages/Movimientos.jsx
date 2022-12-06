import React, { useEffect, useState } from "react";
import alkemyApi from "../api/login.js";
import { TableTransaction } from "../components/TableTransaction";
import { PaginationControl } from "../components/PaginationControl";

export const Movimientos = () => {
  const [operations, setOperations] = useState([]);

  const token = localStorage.getItem("token");
  const Autorizacion = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const get = async () => {
    try {
      const response = await alkemyApi.get("/transactions", Autorizacion);
      const data = response.data.data;

      setOperations(data);
    } catch (error) {
      console.log("no anduvo");
    }
  };

  useEffect(() => {
    get();
  }, []);

  console.log("operations", operations);

  /* "{"concept":"Quick charge","currencyCode":"ARS","isTransference":false} */
  return (
    <div className="App">
      {operations.length !== 0
        ? <>
          <TableTransaction operations={operations} />
          <PaginationControl/>
        </>
        : <div className="page mx-auto text-center w-auto">
          <h3>No hay movimientos</h3>
          <img className="rounded-circle" width="600" height="600" src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=826&t=st=1670198889~exp=1670199489~hmac=7138bd0b752b975b0a174529054e4a7919f58781eea7663f77a983f59482c240" />
        </div>
      }
    </div>
  );
};
