import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { logout } from "../features/auth/authSlice";

const Logout: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded"
    >
      Logout
    </button>
  );
};

export default Logout;
