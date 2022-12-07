import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import accountSlice from "./slices/account.slice";
import transactionsSlice from "./slices/transactions.slice";
import { authSlice } from "./slices/auth.Slice";

const rootReducer = combineReducers({
  userSlice,
  accountSlice,
  transactionsSlice
});

const store = configureStore({
  reducer: {
    rootReducer,
    auth: authSlice.reducer,
    transactions: transactionsSlice,
    user: userSlice
  }
});

export default store;
