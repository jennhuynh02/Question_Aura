import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./RoutesConfig";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <NavBar />
        <RoutesConfig />
      </div>
    </Router>
  );
};

export default App;
