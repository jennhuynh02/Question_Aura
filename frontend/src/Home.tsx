import React from "react";

const Home: React.FC = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">
          Welcome to Question Aura
        </div>
        <p className="text-gray-500">You are logged in!</p>
      </div>
    </div>
  );
};

export default Home;
