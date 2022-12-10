import { useState } from 'react';
import Swal from 'sweetalert2';
import { Button } from '../components/Button';
import { Title } from '../components/Title';
import { useTransactions } from '../hooks/useTransactions';
import { getFormattedDate } from '../helper/formatDate';

export const Gastos = () => {
  const { createOperation } = useTransactions();

  const [transaction, setTransaction] = useState({
    amount: '',
    concept: '',
    date: getFormattedDate()
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const pay = async () => {
    const res = await createOperation(transaction, 'payment');

    if (!res.error) {
      return Swal.fire({
        icon: 'success',
        title: 'Operación Realizada correctamente',
        text: '',
        footer: ''
      });
    }

    Swal.fire({
      icon: 'error',
      title: res.error || 'Algo falló, intente nuevamente mas tarde',
      text: '',
      footer: ''
    });
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center flex-column animate__animated animate__fadeIn">
        <div className="text-center m-3">
          <Title size={'h1'}>Pagos</Title>
        </div>
      </div>
      <div className=" d-flex flex-column flex-sm-row text-center  justify-content-center my-5 flex-wrap h-auto py-sm-5">
        <div className="col-8 col-sm-6 mb-sm-5 pb-sm-3">
          <Title size={'h4'}>Pagos rapidos</Title>
          <div className="d-flex flex-column justify-content-center mt-5 mb-5 pb-sm-5">
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
              <div className="d-flex gap-4">
                <button
                  name="amount"
                  value="1000"
                  onClick={handleInput}
                  className="btn btn-secondary rounded-2 border border-secondary"
                >
                  $1000
                </button>
                <button
                  name="amount"
                  value="2000"
                  onClick={handleInput}
                  className="btn btn-secondary rounded-2 border border-secondary"
                >
                  $2000
                </button>
              </div>
              <div className="d-flex gap-4">
                <button
                  name="amount"
                  value="5000"
                  onClick={handleInput}
                  className="btn btn-secondary rounded-2 border border-secondary"
                >
                  $5000
                </button>
                <button
                  name="amount"
                  value="10000"
                  onClick={handleInput}
                  className="btn btn-secondary rounded-2 border border-secondary"
                >
                  $10000
                </button>
              </div>
            </div>
          </div>
          <Button action={pay}>Pagar</Button>
        </div>
        <div className="mt-4 mt-sm-0 col-8 col-sm-6 mb-sm-5 pb-sm-3">
          <div className="">
            <Title size={'h4'}>Pago personalizado</Title>
          </div>
          <div className="d-flex flex-column align-items-center mb-5 pb-sm-5">
            <label className="text-secondary" htmlFor="">
              concepto
            </label>
            <input
              onChange={handleInput}
              className=" border border-1 border-secondary opacity-50  rounded-1"
              type="text"
              name="concept"
            />
            <label className="text-secondary mt-3" htmlFor="">
              importe
            </label>
            <input
              onChange={handleInput}
              className=" border border-1 border-secondary opacity-50  rounded-1"
              type="text"
              name="amount"
            />
          </div>
          <Button action={pay}>Pagar</Button>
        </div>
      </div>
    </>
  );
};
