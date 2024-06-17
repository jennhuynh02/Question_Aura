import React from "react";
import { useAppDispatch } from "../app/store";
import { logout } from "../features/auth/authSlice";

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button onClick={handleLogout} className="btn btn-secondary">
      Logout
    </button>
  );
};

export default Logout;
