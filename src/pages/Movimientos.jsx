import React, { useState } from "react";
import { Transaction } from "../components/Transaction.jsx";

export const Movimientos = () => {
  const [operations] = useState(["operation"]);

  return (
    <div className="Content">
      <div className="container shadow p-3 my-auto bg-white rounded m-10">
        {operations.length !== 0
          ? <>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Concepto</th>
                  <th scope="col">Importe</th>
                  <th scope="col">
                    <select className="form-select text-dark" aria-label="Default select example">
                      <option selected>Ingreso/Egreso</option>
                      <option value="1">Ingreso</option>
                      <option value="2">Egreso</option>
                    </select></th>
                  <th scope="col">Fecha</th>
                </tr>
              </thead>
              <tbody>
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
              </tbody>
            </table>
              <nav>
                <ul className="col justify-content-center pagination p-50">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">Anterior</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item active">
                    <a className="page-link" href="#">2 </a>
                  </li>
                  <li className="page-item"><a className="page-link">3</a></li>
                  <li className="page-item">
                    <a className="page-link">Siguente</a>
                  </li>
                </ul>
              </nav>

          </>
          : <div className="page mx-auto text-center w-auto">
            <h3>No hay movimientos</h3>
            <img className="img-fluid" src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=826&t=st=1670198889~exp=1670199489~hmac=7138bd0b752b975b0a174529054e4a7919f58781eea7663f77a983f59482c240" />
          </div>
        }
      </div>
    </div>
  );
};
