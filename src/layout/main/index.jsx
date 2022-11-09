import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";

const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Main;
