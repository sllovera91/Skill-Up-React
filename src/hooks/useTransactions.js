
import { useDispatch, useSelector } from 'react-redux';
import alkemyApi from '../api/login';
import { setTransactions, setPage } from '../redux/slices/transactions.slice';
import { setBalance } from '../redux/slices/user.slice';
export const useTransactions = () => {
  const transactions = useSelector(state => state.transactions);
  const user = useSelector(state => state.user.user);
  const { balance } = useSelector((state) => state.user.acquisition);

  const dispatch = useDispatch();

  const token = localStorage.getItem('token');
  const Autorizacion = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const getTransactions = async (page = 1) => {
    try {
      const response = await alkemyApi.get(`/transactions/?page=${page}`, Autorizacion);
      const data = response.data.data;
      const nextPage = response.data.nextPage;

      dispatch(setTransactions(data));

      if (nextPage) dispatch(setPage(true));
      else dispatch(setPage(false));

      let topups = 0;
      let payments = 0;

      data.forEach(operation => {
        if (operation.type === 'payment') {
          payments += +operation.amount;
        }

        if (operation.type === 'topup') {
          topups += +operation.amount;
        }
      });

      const acquisition = {
        balance: topups - payments,
        payments,
        topups
      };

      dispatch(setBalance(acquisition));
    } catch (error) {
      console.log('no anduvo');
    }
  };

  const createOperation = async (operation, type) => {
    const userId = user?.id;
    console.log(userId);
    if (!userId) return { error: 'Intentelo mas tarde' };

    if (type === 'payment' && balance - operation.amount < 0) {
      return { error: 'Saldo insuficiente' };
    }

    const operationUpdated = { ...operation, type, userId };

    try {
      console.log(operationUpdated);
      const response = await alkemyApi.post(
        '/transactions',
        operationUpdated,
        Autorizacion
      );
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  };

  return {
    transactions,
    getTransactions,
    createOperation,
    Autorizacion
  };
};
