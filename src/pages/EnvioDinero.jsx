import React, { useState } from 'react';
import { Title } from '../components/Title';
import { useForm } from '../hooks/useForm';
import { useTransactions } from '../hooks/useTransactions';

export const EnvioDinero = () => {
  const [transaction, setTransaction] = useState({
    receptorId: '',
    description: '',
    amount: ''
  });
  const { receptorId, description, amount } = transaction;
 const { createTransaction } = useTransactions();

 const onInputChange = (e) => {
  const { name, value } = e.target;
  setTransaction({ ...transaction, [name]: value });
 };

  return (
    <div className=" container-fluid d-flex justify-content-center flex-column animate__animated animate__fadeIn">
      <div className="text-center m-3">
        <Title size={'h1'}>Transferi dinero a tus amigos</Title>
      </div>
      <div className="d-flex row py-5 my-4 col-12 flex-wrap justify-content-around ">
        <div className="d-flex  flex-column align-items-center  my-4 col-8 col-md-4 py-3 rounded-2  border border-secondary border-opacity-25 justify-content-center" >
          <Title size={'h4'}>Transferir con ID de cuenta</Title>
          <label className="text-center mt-4 text-secondary" htmlFor="">
            ID de la cuenta
          </label>
          <input
            className=" my-4 border border-1 border-secondary opacity-50  rounded-1 "
            type="number"
            name="receptorId"
            id=""
            value= {receptorId}
            onChange={onInputChange}
          />
          <label className="text-center mt-4 text-secondary" htmlFor="">
            Descripcion
          </label>
          <input
            className=" my-4 border border-1 border-secondary opacity-50  rounded-1 "
            type="text"
            name="description"
            id=""
            value={description}
            onChange={onInputChange}
          />
          <label className="text-center text-secondary" htmlFor="">
            importe a transferir
          </label>
          <input
            className=" my-4 border border-1 border-secondary opacity-50  rounded-1 "
            type="number"
            name="amount"
            id=""
            value={amount}
            onChange={onInputChange}
          />
          <div className="">
            <button onClick={() => createTransaction(transaction)} className="btn btn-primary ms-auto">Transferir</button>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center  my-4 col-8 col-md-4 py-3 rounded-2  border border-secondary border-opacity-25  justify-content-center" >
          <Title size={'h4'}>Transferir con mail</Title>
          <label className="text-center mt-4 text-secondary" htmlFor="">
            Mail del usuario
          </label>
          <input
            className=" my-4 border border-1 border-secondary opacity-50  rounded-1 "
            type="email"
            name=""
            id=""
          />
          <label className="text-center text-secondary" htmlFor="">
            importe a transferir
          </label>
          <input
            className=" my-4 border border-1 border-secondary opacity-50  rounded-1 "
            type="number"
            name=""
            id=""
          />
          <div className="">
            <button className="btn btn-primary ms-auto">Transferir</button>
          </div>
        </div>
      </div>
    </div>
  );
};
