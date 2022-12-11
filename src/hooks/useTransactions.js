
import { useDispatch, useSelector } from 'react-redux';
import alkemyApi from '../api/login';
import { setTransactions } from '../redux/slices/transactions.slice';
import { setBalance } from '../redux/slices/user.slice';
export const useTransactions = () => {
  const transactions = useSelector(state => state.transactions);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const token = localStorage.getItem('token');
  const Autorizacion = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const getTransactions = async () => {
    try {
      const response = await alkemyApi.get('/transactions', Autorizacion);
      const data = response.data.data;
      dispatch(setTransactions(data));
      const topups = data.filter((item) => item.type === "topup").reduce((prev, curr) => prev + Number(curr.amount), 0);
      const payments = data.filter((item) => item.type === "payment").reduce((prev, curr) => prev + Number(curr.amount), 0);
      const balance = topups - payments;
      const acquisition = {
        balance,
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

  const createTransaction = async ({ receptorId, description, amount }) => {
    try {
    const resPost = await alkemyApi.post(`/accounts/${receptorId}`, {
        type: "payment",
        concept: description,
        amount: Number(amount)
      }, Autorizacion);
      console.log(resPost.data);
    } catch (error) {
      console.log("no anduvo");
    }
  };
  return {
    transactions,
    getTransactions,
    createOperation,
    Autorizacion,
    createTransaction
  };
};
