import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Logout from "./Logout";

const NavBar: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <nav className="mb-4">
      <Link to="/" className="mr-4">
        Home
      </Link>
      {auth.user ? (
        <>
          <Link to="/dashboard" className="mr-4">
            Dashboard
          </Link>
          <Logout />
        </>
      ) : (
        <Link to="/login" className="mr-4">
          Login
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
