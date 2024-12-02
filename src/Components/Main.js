import React from "react";
import Header from "./Header";

const Main = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center text-lg font-semibold">
          Welcome after login
        </div>
      </div>
    </div>
  );
};

export default Main;
