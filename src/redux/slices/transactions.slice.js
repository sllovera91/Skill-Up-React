import { createSlice } from "@reduxjs/toolkit";

const transactionsSliceEmptyState = [];

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: transactionsSliceEmptyState,
  reducers: {
    resetTransactionsState: () => {
      return transactionsSliceEmptyState;
    }
  }
});

export const { resetTransactionsState } = transactionsSlice.actions;
export default transactionsSlice.reducer;
