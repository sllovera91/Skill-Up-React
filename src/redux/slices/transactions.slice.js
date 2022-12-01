import { createSlice } from "@reduxjs/toolkit";

const transactionsSliceEmptyState = [];

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: transactionsSliceEmptyState,
  reducers: {
    resetTransactionsState: () => {
      return transactionsSliceEmptyState;
    },
    setTransactions: (_, action) => {
      return action.payload;
    }
  }
});

export const { resetTransactionsState } = transactionsSlice.actions;
export default transactionsSlice.reducer;
