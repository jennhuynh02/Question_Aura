import { User } from "./authSlice";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
}
