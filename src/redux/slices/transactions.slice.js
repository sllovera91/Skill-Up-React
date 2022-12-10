import { createSlice } from '@reduxjs/toolkit';

const transactionsSliceEmptyState = {
  transactions: []
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: transactionsSliceEmptyState,
  reducers: {
    resetTransactionsState: () => {
      return transactionsSliceEmptyState;
    },
    setTransactions: (state, action) => {
      return {
        ...state,
        transactions: action.payload
      };
    }
  }
});

export const { setTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;
