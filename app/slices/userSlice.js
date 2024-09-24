import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: null,
};
if (typeof window !== "undefined") {
  const storedUser = localStorage.getItem("user");
  initialState.auth = storedUser ? JSON.parse(storedUser) : {};
}
export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const { setAuth } = userSlice.actions;

export default userSlice.reducer;
