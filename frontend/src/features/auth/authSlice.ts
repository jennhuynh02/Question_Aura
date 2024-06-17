import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
  user: any;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI,
  ) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/sign_in`,
        { user: { email, password } },
        { withCredentials: true },
      );
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue("Login failed");
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.delete(`${process.env.REACT_APP_API_URL}/users/sign_out`, {
      withCredentials: true,
    });
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue("Logout failed");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;