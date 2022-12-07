import { createSlice } from "@reduxjs/toolkit";

const userSliceEmptyState = {
    user: {
        first_name: "",
        last_name: "",
        email: "",
        roleId: 2,
        points: 0
    },
    acquisition: {
      balance: 0,
      payments: 0,
      topups: 0
    },
    jwt: ""
};

const userSlice = createSlice({
  name: "user",
  initialState: userSliceEmptyState,
  reducers: {
    resetUserState: () => {
      return userSliceEmptyState;
    },
    setUser: (state, action) => {
      return {
        ...state.jwt,
        user: action.payload
      };
    },
    setJwt: (state, action) => {
      return {
        ...state.user,
        jwt: action.payload
      };
    },
    setBalance: (state, action) => {
      return {
        ...state.acquisition,
        acquisition: action.payload
      };
    }
  }
});

export const { resetUserState, setBalance } = userSlice.actions;
export default userSlice.reducer;
