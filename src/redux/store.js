import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import accountSlice from "./slices/account.slice";
import transactionsSlice from "./slices/transactions.slice";

const rootReducer = combineReducers({
  userSlice,
  accountSlice,
  transactionsSlice
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
