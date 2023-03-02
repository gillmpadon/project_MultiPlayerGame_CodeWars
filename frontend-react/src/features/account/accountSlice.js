import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    username: "",
    email: "",
  },
  reducers: {
    updateAccount: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    removeAccount: (state) => {
      state.email = "";
      state.username = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateAccount, removeAccount } = accountSlice.actions;

export default accountSlice.reducer;
