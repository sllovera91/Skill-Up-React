import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TableTransaction } from '../components/TableTransaction';
import { PaginationControl } from '../components/PaginationControl';
import { useTransactions } from '../hooks/useTransactions';
import { Title } from '../components/Title';

export const Movimientos = () => {
  const { getTransactions } = useTransactions();
  useEffect(() => {
    getTransactions();
  }, []);

  const operations = useSelector((state) => state.transactions.transactions);

  return (
    <>
      <div className="container-fluid d-flex justify-content-center flex-column animate__animated animate__fadeIn">
        <div className="text-center m-3">
          <Title size={'h1'}>Movimientos</Title>
        </div>
      </div>
      { operations && operations.length !== 0
        ? <>
          <TableTransaction operations={operations} />
          <PaginationControl/>
        </>
        : <div className="page mx-auto text-center w-auto">
          <img className="rounded-circle" width="600" height="600" src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=826&t=st=1670198889~exp=1670199489~hmac=7138bd0b752b975b0a174529054e4a7919f58781eea7663f77a983f59482c240" />
          <h3>No hay movimientos</h3>
        </div>
      }
    </>
  );
};
