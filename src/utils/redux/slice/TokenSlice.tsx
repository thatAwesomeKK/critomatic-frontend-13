import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

export const tokenSlice = createSlice({
  name: "accessToken",
  initialState,
  reducers: {
    storeToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

export const { storeToken } = tokenSlice.actions;
export default tokenSlice.reducer;
