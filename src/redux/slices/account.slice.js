import { createSlice } from '@reduxjs/toolkit';

const accountSliceEmptyState = {};

const accountSlice = createSlice({
  name: 'account',
  initialState: accountSliceEmptyState,
  reducers: {
    resetAccountState: () => {
      return accountSliceEmptyState;
    },
    setAccount: (_, action) => {
      return {
        ...action.payload
      };
    }
  }
});

export const { resetAccountState } = accountSlice.actions;
export default accountSlice.reducer;
