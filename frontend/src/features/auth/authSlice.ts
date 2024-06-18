import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginPayload, LoginResponse } from "./types";

// Jenn TODO: Add the User interface here
export interface User {
  id: string;
  email: string;
  last_name: string;
  first_name: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk<
  User,
  LoginPayload,
  { rejectValue: string }
>("auth/login", async (payload, thunkAPI) => {
  try {
    const response = await axios.post<LoginResponse>(
      `/login`,
      { user: payload },
      { withCredentials: true },
    );
    return response.data.user;
  } catch (error) {
    return thunkAPI.rejectWithValue("Login failed");
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.delete(`${process.env.REACT_APP_API_URL}/users/logout`, {
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
