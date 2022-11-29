import { createSlice } from "@reduxjs/toolkit";

const userSliceEmptyState = {
    user: {
        first_name: "",
        last_name: "",
        email: "",
        roleId: 2,
        points: 0
    },
    jwt: ""
};

const userSlice = createSlice({
  name: "user",
  initialState: userSliceEmptyState,
  reducers: {
    resetUserState: () => {
      return userSliceEmptyState;
    }
  }
});

export const { resetUserState } = userSlice.actions;
export default userSlice.reducer;
