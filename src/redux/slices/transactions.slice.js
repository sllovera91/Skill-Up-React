import { createSlice } from '@reduxjs/toolkit';

const transactionsSliceEmptyState = {
  transactions: [],
  nextPage: false
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
    },
    setPage: (state, action) => {
      return {
        ...state,
        nextPage: action.payload
      };
    }
  }
});

export const { setTransactions, setPage } = transactionsSlice.actions;
export default transactionsSlice.reducer;
