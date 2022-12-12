import React, { useEffect } from 'react';
import { Title } from '../components/Title';
import { TableTransaction } from '../components/TableTransaction';
import { useSelector } from 'react-redux';
import { useTransactions } from '../hooks/useTransactions';
export const Balance = () => {
  const { getTransactions } = useTransactions();
  useEffect(() => {
    getTransactions();
  }, []);

  const operations = useSelector((state) => state.transactions.transactions);
  const { balance, payments, topups } = useSelector((state) => state.user.acquisition);

  return (

    <>
      <div className="container-fluid d-flex justify-content-center flex-column animate__animated animate__fadeIn">
        <div className="text-center m-3">
          <Title size={'h1'}>Balance</Title>
        </div>
        <div className="d-flex justify-content-evenly">
          <div className="col-lg-2">
            <div className="card">
              <div className="card-body text-center">
                <div className="card-title mt-2 mb-1"></div>
                <span className="fs-2 mb-3 font-weight-bold">Ingresos</span>
                <p className="mb-3 mt-3">$ {topups}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="card">
              <div className="card-body text-center">
                <div className="card-title mt-2 mb-1"></div>
                <span className="fs-2 mb-3 font-weight-bold">Balance</span>
                <p className="mb-3 mt-3">$ {balance}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="card">
              <div className="card-body text-center">
                <div className="card-title mt-2 mb-1"></div>
                <span className="fs-2 mb-3 font-weight-bold">Pagos</span>
                <p className="mb-3 mt-3">$ {payments}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-3 block">
        <Title size={'h3'}>Ultimos movimientos</Title>
      </div>
      {operations && operations.length !== 0
        ? <TableTransaction operations={operations} />
        : <div className="page mx-auto text-center w-auto animate__animated animate__fadeIn">
          <img width="250" height="250" src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=826&t=st=1670198889~exp=1670199489~hmac=7138bd0b752b975b0a174529054e4a7919f58781eea7663f77a983f59482c240" />
          <h3>No hay movimientos</h3>
        </div>
      }

    </>
  );
};
