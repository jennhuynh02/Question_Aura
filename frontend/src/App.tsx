import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logout from "./components/Logout";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import RoutesConfig from "./RoutesConfig";

const App: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4">
          <Link to="/" className="mr-4">
            Home
          </Link>
          {auth.user ? (
            <Logout />
          ) : (
            <Link to="/login" className="mr-4">
              Login
            </Link>
          )}
        </nav>
        <RoutesConfig />
      </div>
    </Router>
  );
};

export default App;
