import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "validando",
    user: {},
    errorMsg: undefined
  },
  reducers: {
    onChecking: (state) => {
      state.status = "validando";
      state.user = {};
      state.errorMsg = undefined;
    },
    onLogin: (state, action) => {
      state.status = "validado";
      state.user = action.payload;
      state.errorMsg = undefined;
    },
    onLogout: (state, action) => {
        state.status = "no-validado";
        state.user = {};
        state.errorMsg = action.payload;
  }
    }
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;
