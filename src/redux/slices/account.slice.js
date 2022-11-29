import { createSlice } from "@reduxjs/toolkit";

const accountsSliceEmptyState = {};

const accountSlice = createSlice({
  name: "account",
  initialState: accountsSliceEmptyState,
  reducers: {
    resetAccountState: () => {
      return accountsSliceEmptyState;
    }
  }
});

export const { resetAccountState } = accountSlice.actions;
export default accountSlice.reducer;
