
import { useDispatch, useSelector } from "react-redux";
import alkemyApi from "../api/login";
import { setTransactions } from "../redux/slices/transactions.slice";
import { setBalance } from "../redux/slices/user.slice";
export const useTransactions = () => {
  const transactions = useSelector(state => state.transactions);
  const user = useSelector(state => state.user.user);

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const Autorizacion = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const getTransactions = async () => {
    try {
      const response = await alkemyApi.get("/transactions", Autorizacion);
      const data = response.data.data;
      dispatch(setTransactions(data));

      let topups = 0;
      let payments = 0;

      data.forEach(operation => {
        if (operation.type === "payment") {
          payments += +operation.amount;
        }

        if (operation.type === "topup") {
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
      console.log("no anduvo");
    }
  };

  const createOperation = async (operation, type) => {
    const userId = user?.id;
    console.log(userId);
    if (!userId) return { error: "Intentelo mas tarde" };

    const operationUpdated = { ...operation, type, userId };

    try {
      console.log(operationUpdated);
      const response = await alkemyApi.post(
        "/transactions",
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
